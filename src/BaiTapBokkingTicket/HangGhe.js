import React, { Component } from 'react'
import { connect } from 'react-redux'
import { datGheAction } from '../redux/action/BaiTapDatVeActions';
class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      // if (index === 0) {
      //   return <span className='rowNumber'>{ghe.soGhe}</span>
      // }
      let disabled = false;
      let cssGheDaDat = '';
      // trạng thái đã dặt rồi
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      // xét trạng thái ghế đang đặt(đã đặt, có thể đặt )
      let cssGheDangDat = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe === ghe.soGhe);
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon"
      }
      return <button key={index} className={`${cssGheDaDat} ghe ${cssGheDangDat}`} disabled={disabled} onClick={()=>{this.props.datGhe(ghe)}}>
        {ghe.soGhe}
      </button>
    })
  }
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className='rowNumber'>{hang.soGhe}</button>
    })

  }
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div>
        {this.props.hangGhe.hang}{this.renderSoHang()}
      </div>
    } else {

      return <div>
        {this.props.hangGhe.hang}{this.renderGhe()}
      </div>
    }

  }

  render() {
    console.log(this.props);
    return (
      <div className='text-light ms-5 mt-3 text-start '>
        {this.renderHangGhe()}
      </div>
    )
  }
}



const mapStateToProps = (state)=>{
  return {
    danhSachGheDangDat : state.BaiTapDatVeReducer.danhSachGheDangDat
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    datGhe: (ghe)=>{
      dispatch(datGheAction(ghe))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)