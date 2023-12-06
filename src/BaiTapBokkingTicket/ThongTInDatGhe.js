import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/action/BaiTapDatVeActions';

 class ThongTInDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mb-5'>
                    <button className='gheDuocChon me-2'></button>
                    <span className='text-light'>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon me-2 my-2'></button>
                    <span className='text-light'>Ghế đang chọn</span>
                    <br />
                    <button className='ghe me-2' style={{ marginLeft: 0 }}></button>
                    <span className='text-light'>Ghế chưa đặt</span>
                </div>
                <div>
                    <div
                        class="table-responsive"
                    >
                        <table
                            class="table table-bordered  table-dark"
                        >
                            <thead>
                                <tr>
                                    <th scope="col">Số ghế</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Hành động</th>
                                </tr>
                            </thead>
                            <tbody >
                              {this.props.danhSachGheDangDat.map((item, index)=>{
                                return <tr key={index}>
                                    <td>{item.soGhe}</td>
                                    <td>{item.gia}</td>
                                    <td><button className='btn btn-danger' onClick={()=>{this.props.dispatch(huyGheAction(item.soGhe))}}>X</button></td>
                                </tr>
                              })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Tổng tiền</td>
                                    <td>{this.props.danhSachGheDangDat.reduce((tongTien, item, index)=>{
                                        return tongTien += item.gia;
                                    },0)}</td>
                                    <td><button className='btn btn-primary' onClick={()=>{alert("Bạn đã đặt vé thành công!!!")}}>Đặt vé</button></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        danhSachGheDangDat : state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTInDatGhe)