import * as actions from "../actions/types";

const initialState = [
  {
    name: "desktop",
    type: "folder",
    child: [{ name: "profile", type: "folder", child: [] }],
  },
  {
    name: "raghavdhingra",
    type: "folder",
    child: [],
  },
  {
    name: "public",
    type: "folder",
    child: [],
  },
];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case action: {
      const { something } = payload;
      console.log(something);
      return state;
    }
    default:
      return state;
  }
}
