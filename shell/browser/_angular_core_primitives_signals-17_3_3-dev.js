var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {}) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// node_modules/@angular/core/fesm2022/primitives/signals.mjs
function defaultEquals(a, b) {
  return Object.is(a, b);
}
var activeConsumer = null;
var inNotificationPhase = false;
var epoch = 1;
var SIGNAL = /* @__PURE__ */Symbol("SIGNAL");
function setActiveConsumer(consumer) {
  const prev = activeConsumer;
  activeConsumer = consumer;
  return prev;
}
function getActiveConsumer() {
  return activeConsumer;
}
function isInNotificationPhase() {
  return inNotificationPhase;
}
function isReactive(value) {
  return value[SIGNAL] !== void 0;
}
var REACTIVE_NODE = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: false,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: false,
  consumerIsAlwaysLive: false,
  producerMustRecompute: () => false,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {}
};
function producerAccessed(node) {
  if (inNotificationPhase) {
    throw new Error(typeof ngDevMode !== "undefined" && ngDevMode ? `Assertion error: signal read during notification phase` : "");
  }
  if (activeConsumer === null) {
    return;
  }
  activeConsumer.consumerOnSignalRead(node);
  const idx = activeConsumer.nextProducerIndex++;
  assertConsumerNode(activeConsumer);
  if (idx < activeConsumer.producerNode.length && activeConsumer.producerNode[idx] !== node) {
    if (consumerIsLive(activeConsumer)) {
      const staleProducer = activeConsumer.producerNode[idx];
      producerRemoveLiveConsumerAtIndex(staleProducer, activeConsumer.producerIndexOfThis[idx]);
    }
  }
  if (activeConsumer.producerNode[idx] !== node) {
    activeConsumer.producerNode[idx] = node;
    activeConsumer.producerIndexOfThis[idx] = consumerIsLive(activeConsumer) ? producerAddLiveConsumer(node, activeConsumer, idx) : 0;
  }
  activeConsumer.producerLastReadVersion[idx] = node.version;
}
function producerIncrementEpoch() {
  epoch++;
}
function producerUpdateValueVersion(node) {
  if (consumerIsLive(node) && !node.dirty) {
    return;
  }
  if (!node.dirty && node.lastCleanEpoch === epoch) {
    return;
  }
  if (!node.producerMustRecompute(node) && !consumerPollProducersForChange(node)) {
    node.dirty = false;
    node.lastCleanEpoch = epoch;
    return;
  }
  node.producerRecomputeValue(node);
  node.dirty = false;
  node.lastCleanEpoch = epoch;
}
function producerNotifyConsumers(node) {
  if (node.liveConsumerNode === void 0) {
    return;
  }
  const prev = inNotificationPhase;
  inNotificationPhase = true;
  try {
    for (const consumer of node.liveConsumerNode) {
      if (!consumer.dirty) {
        consumerMarkDirty(consumer);
      }
    }
  } finally {
    inNotificationPhase = prev;
  }
}
function producerUpdatesAllowed() {
  return activeConsumer?.consumerAllowSignalWrites !== false;
}
function consumerMarkDirty(node) {
  node.dirty = true;
  producerNotifyConsumers(node);
  node.consumerMarkedDirty?.(node);
}
function consumerBeforeComputation(node) {
  node && (node.nextProducerIndex = 0);
  return setActiveConsumer(node);
}
function consumerAfterComputation(node, prevConsumer) {
  setActiveConsumer(prevConsumer);
  if (!node || node.producerNode === void 0 || node.producerIndexOfThis === void 0 || node.producerLastReadVersion === void 0) {
    return;
  }
  if (consumerIsLive(node)) {
    for (let i = node.nextProducerIndex; i < node.producerNode.length; i++) {
      producerRemoveLiveConsumerAtIndex(node.producerNode[i], node.producerIndexOfThis[i]);
    }
  }
  while (node.producerNode.length > node.nextProducerIndex) {
    node.producerNode.pop();
    node.producerLastReadVersion.pop();
    node.producerIndexOfThis.pop();
  }
}
function consumerPollProducersForChange(node) {
  assertConsumerNode(node);
  for (let i = 0; i < node.producerNode.length; i++) {
    const producer = node.producerNode[i];
    const seenVersion = node.producerLastReadVersion[i];
    if (seenVersion !== producer.version) {
      return true;
    }
    producerUpdateValueVersion(producer);
    if (seenVersion !== producer.version) {
      return true;
    }
  }
  return false;
}
function consumerDestroy(node) {
  assertConsumerNode(node);
  if (consumerIsLive(node)) {
    for (let i = 0; i < node.producerNode.length; i++) {
      producerRemoveLiveConsumerAtIndex(node.producerNode[i], node.producerIndexOfThis[i]);
    }
  }
  node.producerNode.length = node.producerLastReadVersion.length = node.producerIndexOfThis.length = 0;
  if (node.liveConsumerNode) {
    node.liveConsumerNode.length = node.liveConsumerIndexOfThis.length = 0;
  }
}
function producerAddLiveConsumer(node, consumer, indexOfThis) {
  assertProducerNode(node);
  assertConsumerNode(node);
  if (node.liveConsumerNode.length === 0) {
    for (let i = 0; i < node.producerNode.length; i++) {
      node.producerIndexOfThis[i] = producerAddLiveConsumer(node.producerNode[i], node, i);
    }
  }
  node.liveConsumerIndexOfThis.push(indexOfThis);
  return node.liveConsumerNode.push(consumer) - 1;
}
function producerRemoveLiveConsumerAtIndex(node, idx) {
  assertProducerNode(node);
  assertConsumerNode(node);
  if (typeof ngDevMode !== "undefined" && ngDevMode && idx >= node.liveConsumerNode.length) {
    throw new Error(`Assertion error: active consumer index ${idx} is out of bounds of ${node.liveConsumerNode.length} consumers)`);
  }
  if (node.liveConsumerNode.length === 1) {
    for (let i = 0; i < node.producerNode.length; i++) {
      producerRemoveLiveConsumerAtIndex(node.producerNode[i], node.producerIndexOfThis[i]);
    }
  }
  const lastIdx = node.liveConsumerNode.length - 1;
  node.liveConsumerNode[idx] = node.liveConsumerNode[lastIdx];
  node.liveConsumerIndexOfThis[idx] = node.liveConsumerIndexOfThis[lastIdx];
  node.liveConsumerNode.length--;
  node.liveConsumerIndexOfThis.length--;
  if (idx < node.liveConsumerNode.length) {
    const idxProducer = node.liveConsumerIndexOfThis[idx];
    const consumer = node.liveConsumerNode[idx];
    assertConsumerNode(consumer);
    consumer.producerIndexOfThis[idxProducer] = idx;
  }
}
function consumerIsLive(node) {
  return node.consumerIsAlwaysLive || (node?.liveConsumerNode?.length ?? 0) > 0;
}
function assertConsumerNode(node) {
  node.producerNode ??= [];
  node.producerIndexOfThis ??= [];
  node.producerLastReadVersion ??= [];
}
function assertProducerNode(node) {
  node.liveConsumerNode ??= [];
  node.liveConsumerIndexOfThis ??= [];
}
function createComputed(computation) {
  const node = Object.create(COMPUTED_NODE);
  node.computation = computation;
  const computed = () => {
    producerUpdateValueVersion(node);
    producerAccessed(node);
    if (node.value === ERRORED) {
      throw node.error;
    }
    return node.value;
  };
  computed[SIGNAL] = node;
  return computed;
}
var UNSET = /* @__PURE__ */Symbol("UNSET");
var COMPUTING = /* @__PURE__ */Symbol("COMPUTING");
var ERRORED = /* @__PURE__ */Symbol("ERRORED");
var COMPUTED_NODE = /* @__PURE__ */(() => {
  return __spreadProps(__spreadValues({}, REACTIVE_NODE), {
    value: UNSET,
    dirty: true,
    error: null,
    equal: defaultEquals,
    producerMustRecompute(node) {
      return node.value === UNSET || node.value === COMPUTING;
    },
    producerRecomputeValue(node) {
      if (node.value === COMPUTING) {
        throw new Error("Detected cycle in computations.");
      }
      const oldValue = node.value;
      node.value = COMPUTING;
      const prevConsumer = consumerBeforeComputation(node);
      let newValue;
      try {
        newValue = node.computation();
      } catch (err) {
        newValue = ERRORED;
        node.error = err;
      } finally {
        consumerAfterComputation(node, prevConsumer);
      }
      if (oldValue !== UNSET && oldValue !== ERRORED && newValue !== ERRORED && node.equal(oldValue, newValue)) {
        node.value = oldValue;
        return;
      }
      node.value = newValue;
      node.version++;
    }
  });
})();
function defaultThrowError() {
  throw new Error();
}
var throwInvalidWriteToSignalErrorFn = defaultThrowError;
function throwInvalidWriteToSignalError() {
  throwInvalidWriteToSignalErrorFn();
}
function setThrowInvalidWriteToSignalError(fn) {
  throwInvalidWriteToSignalErrorFn = fn;
}
var postSignalSetFn = null;
function createSignal(initialValue) {
  const node = Object.create(SIGNAL_NODE);
  node.value = initialValue;
  const getter = () => {
    producerAccessed(node);
    return node.value;
  };
  getter[SIGNAL] = node;
  return getter;
}
function setPostSignalSetFn(fn) {
  const prev = postSignalSetFn;
  postSignalSetFn = fn;
  return prev;
}
function signalSetFn(node, newValue) {
  if (!producerUpdatesAllowed()) {
    throwInvalidWriteToSignalError();
  }
  if (!node.equal(node.value, newValue)) {
    node.value = newValue;
    signalValueChanged(node);
  }
}
function signalUpdateFn(node, updater) {
  if (!producerUpdatesAllowed()) {
    throwInvalidWriteToSignalError();
  }
  signalSetFn(node, updater(node.value));
}
var SIGNAL_NODE = /* @__PURE__ */(() => {
  return __spreadProps(__spreadValues({}, REACTIVE_NODE), {
    equal: defaultEquals,
    value: void 0
  });
})();
function signalValueChanged(node) {
  node.version++;
  producerIncrementEpoch();
  producerNotifyConsumers(node);
  postSignalSetFn?.();
}
function createWatch(fn, schedule, allowSignalWrites) {
  const node = Object.create(WATCH_NODE);
  if (allowSignalWrites) {
    node.consumerAllowSignalWrites = true;
  }
  node.fn = fn;
  node.schedule = schedule;
  const registerOnCleanup = cleanupFn => {
    node.cleanupFn = cleanupFn;
  };
  function isWatchNodeDestroyed(node2) {
    return node2.fn === null && node2.schedule === null;
  }
  function destroyWatchNode(node2) {
    if (!isWatchNodeDestroyed(node2)) {
      consumerDestroy(node2);
      node2.cleanupFn();
      node2.fn = null;
      node2.schedule = null;
      node2.cleanupFn = NOOP_CLEANUP_FN;
    }
  }
  const run = () => {
    if (node.fn === null) {
      return;
    }
    if (isInNotificationPhase()) {
      throw new Error(`Schedulers cannot synchronously execute watches while scheduling.`);
    }
    node.dirty = false;
    if (node.hasRun && !consumerPollProducersForChange(node)) {
      return;
    }
    node.hasRun = true;
    const prevConsumer = consumerBeforeComputation(node);
    try {
      node.cleanupFn();
      node.cleanupFn = NOOP_CLEANUP_FN;
      node.fn(registerOnCleanup);
    } finally {
      consumerAfterComputation(node, prevConsumer);
    }
  };
  node.ref = {
    notify: () => consumerMarkDirty(node),
    run,
    cleanup: () => node.cleanupFn(),
    destroy: () => destroyWatchNode(node),
    [SIGNAL]: node
  };
  return node.ref;
}
var NOOP_CLEANUP_FN = () => {};
var WATCH_NODE = /* @__PURE__ */(() => {
  return __spreadProps(__spreadValues({}, REACTIVE_NODE), {
    consumerIsAlwaysLive: true,
    consumerAllowSignalWrites: false,
    consumerMarkedDirty: node => {
      if (node.schedule !== null) {
        node.schedule(node.ref);
      }
    },
    hasRun: false,
    cleanupFn: NOOP_CLEANUP_FN
  });
})();
function setAlternateWeakRefImpl(impl) {}
export { REACTIVE_NODE, SIGNAL, SIGNAL_NODE, consumerAfterComputation, consumerBeforeComputation, consumerDestroy, consumerMarkDirty, consumerPollProducersForChange, createComputed, createSignal, createWatch, defaultEquals, getActiveConsumer, isInNotificationPhase, isReactive, producerAccessed, producerNotifyConsumers, producerUpdateValueVersion, producerUpdatesAllowed, setActiveConsumer, setAlternateWeakRefImpl, setPostSignalSetFn, setThrowInvalidWriteToSignalError, signalSetFn, signalUpdateFn };
/*! Bundled license information:

@angular/core/fesm2022/primitives/signals.mjs:
  (**
   * @license Angular v17.3.3
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/