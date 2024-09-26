import React, { useRef, useEffect } from "react";

function LoginModal({ handleClose, show }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    }

    // 只在 modal 顯示時添加事件監聽器
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // 清理函數
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, handleClose]);

  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal-backdrop show"></div>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog" ref={modalRef}>
          <div className="modal-content">
            <div className="form-border">
              <form action="#" className="needs-validation" noValidate>
                <h2 className="text-center">會員登入</h2>
                <div className="mb-3">
                  <label htmlFor="account" className="form-label">帳號</label>
                  <input type="text" className="form-control" id="account" name="account" required />
                  <div className="invalid-feedback">
                    此為必填欄位
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">密碼</label>
                  <input type="password" className="form-control" id="password" required />
                  <div className="invalid-feedback">
                    此為必填欄位
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check-1">
                    <input className="remember" type="checkbox" id="remember" />
                    <label className="remember" htmlFor="remember">
                      記得我
                    </label>
                  </div>
                </div>
                <div className="d-grid justify-content-md-end">
                  <input className="btn btn-primary" type="submit" value="登入" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;