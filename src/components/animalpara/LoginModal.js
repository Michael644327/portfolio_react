import React from "react";

function LoginModal(){
    return(
        <div class="modal fade" id="example6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="form-border">
        <form action="#" class="needs-validation" novalidate>
          <h2 class="text-center">登入<br />後台管理系統</h2>
          <div class="mb-3">
            <label for="account" class="form-label">帳號</label>
            <input type="text" class="form-control" id="account" name="account" required />
            <div class="invalid-feedback">
              此為必填欄位
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密碼</label>
            <input type="password" class="form-control" id="password" required />
            <div class="invalid-feedback">
              此為必填欄位
            </div>
          </div>
          <div class="mb-3">
            <div class="form-check-1">
              <input class="remember" type="checkbox" id="remember" />
              <label class="remember" for="remember">
                記得我
              </label>
            </div>
            {/* <!-- <button type="submit" class="btn btn-primary">登入</button> --> */}
            </div>
            <div class="d-grid justify-content-md-end">
              <input class="btn btn-primary" type="submit" value="登入" />
            </div>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}

export default LoginModal;