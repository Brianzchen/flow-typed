//@flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { takeLast } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(takeLast(7));
});

it("should enforce types", () => {
  // $FlowExpectedError
  const o = of(1, 2, 3).pipe(takeLast("7"));
});
