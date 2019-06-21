import React from 'react';

export default function ModalChiTietSanPham(props) {

    return (
        <div>
            <div>
                <div className="modal" id="xemChiTietSanPham">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{props.sanPhamDuocXem.name}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body">
                                {props.sanPhamDuocXem.desc}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
