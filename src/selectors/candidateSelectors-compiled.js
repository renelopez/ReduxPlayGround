'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCandidatesFormattedForDropdown = getCandidatesFormattedForDropdown;
function getCandidatesFormattedForDropdown(state) {
  console.log(state);
  return state.map(function (item) {
    return {
      value: item.id,
      text: item.name
    };
  });
}

//# sourceMappingURL=candidateSelectors-compiled.js.map