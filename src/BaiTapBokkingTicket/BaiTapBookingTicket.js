import React, { Component, Fragment } from 'react'
import './BaiTapBookingTicket.css'
import ThongTInDatGhe from './ThongTInDatGhe'
import danhSachGheData from './../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return <div key={index} >
        <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
      </div>
    })
  }
  render() {
    return (
      <div style={{ position: "fixed", width: '100%', height: '100%', backgroundImage: "url(./img/bgmovie.jpg)", backgroundSize: "100%" }} className='bookingMovie'>
        <div style={{ position: "fixed", width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className='container'>
            <div className='row my-5'>
              <div className='col-8 text-center'>
                <div className='display-4 text-light'>Đặt vé xem phim</div>
                <div className='text-light' style={{ fontSize: '26px' }}>Màn hình</div>
                <div className='d-flex flex-row justify-content-center '>
                  <div className='screen'></div>

                </div>
                <div>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className='col-4 '>
                <div className='text-light mb-5' style={{ fontSize: '26px' }}>Danh sách ghế bạn chọn</div>
                <ThongTInDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
