function Toast() {
    return (
      <div className="toast-container position-absolute p-3 start-50 bottom-0 translate-middle-x">
        <div className="toast align-items-center text-white bg-danger border-0">
          <div className="d-flex">
            <div className="toast-body"></div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
            ></button>
          </div>
        </div>
      </div>
    );
  } 