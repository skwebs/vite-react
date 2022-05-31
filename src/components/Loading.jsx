import "./loading.scss"
const Loading = (props) => {
  return (
    props.show ?
      <>
        <div id="loading" className="">
          <div className="bg-black px-3 fw-bolder rounded py-2 d-flex justify-content-center align-items-center">
            <div className="text-light me-2">{props.text ? props.text : "Wait..."}</div>
            <div className=" ms-2 spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>

          </div>
        </div>
      </> : null
  )
}

export default Loading
