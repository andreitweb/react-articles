/** Create and dispatch global event
 *
 * @param {string} eventName - event name
 * @param {object} data - event data
 */
export const emitGlobalEvent = (eventName, data) => {
  document.dispatchEvent(
    new CustomEvent(eventName, {
      detail: data,
    }),
  );
};