import React from 'react'

function ProductLoding(props) {
    const loadingArray = [...Array(props.loading ? props.loading : 3)]
    const LoadingHTML = loadingArray.map((loading,index)=>{
        return <div key={index} className="col-md-4 col-6 sk-main__custom-pad-l">
            <div className="sk-main__product text-center color-light-white-bg">
                <figure className="sk-main__product-img">
                </figure> 
                <div className="sk-main__product-details">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow spinner-grow-sm text-dark" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-grow spinner-grow-sm text-secondary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-grow spinner-grow-sm text-dark" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    })
    return (
    <>{LoadingHTML}</>
    )
}

export default ProductLoding
