import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeTypes";

const stateDefault = {
  danhSachGheDangDat: [
    // { soGhe: "A1", gia: 1000 }
  ],
};

const BaiTapDatVeReducer = (state = stateDefault, action) => {
  console.log(action.payload);
  switch (action.type) {
    case DAT_GHE: {
      let newState = [...state.danhSachGheDangDat];
      console.log(newState);
      let index = newState.findIndex((gheDangDat) => {
        return gheDangDat.soGhe === action.payload.soGhe;
      });
      if (index !== -1) {
        console.log(123);
        const updatedItems = state.danhSachGheDangDat.filter(
          (item) => item.soGhe !== action.payload.soGhe
        );
        return {
          ...state,
          danhSachGheDangDat: updatedItems,
        };
      } else {
        return {
          ...state,
          danhSachGheDangDat: [...state.danhSachGheDangDat, action.payload],
        };
      }
    }
    case HUY_GHE: {
      const updatedItems = state.danhSachGheDangDat.filter(
        (item) => item.soGhe !== action.payload
      );
      return {
        ...state,
        danhSachGheDangDat: updatedItems,
      };
    }
    default:
      return { ...state };
  }
};

export default BaiTapDatVeReducer;
