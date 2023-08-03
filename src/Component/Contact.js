import React from 'react'

export default function Contact(props) {
  return (
    <div style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
      <h1>Contact us</h1>
      <div className="container" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
				<div className="row">
					<div className="col-lg-8 col-xl-6 text-center mx-auto">
						{/* <!-- Title --> */}
						<h1 className="mb-4">We're here to help!</h1>
					</div>
				</div>

				{/* <!-- Contact info box --> */}
				<div className="row g-4 g-md-5 mb-lg-5 mt-lg-3" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
					{/* <!-- Box item --> */}
					<div className="col-lg-4 mt-lg-0">
						<div className="card card-body bg-primary shadow py-5 text-center h-100">
							{/* <!-- Title --> */}
							<h5 className="mb-3">Customer Support</h5>
							<ul className="list-inline mb-0">
								{/* <!-- Address --> */}
								<li className="list-item mb-3">
									<a href="#" className="text-white"> <i className="fas fa-fw fa-map-marker-alt me-2 mt-1"></i>M.A Jinnah Campus, Defence Road,
										Off Raiwind Road, Lahore </a>
								</li>
								{/* <!-- Phone number --> */}
								<li className="list-item mb-3">
									<a href="#" className="text-white"> <i className="fas fa-fw fa-phone-alt me-2"></i>0800-880-88 </a>
								</li>
								{/* <!-- Email id --> */}
								<li className="list-item mb-0">
									<a href="#" className="text-white"> <i className="far fa-fw fa-envelope me-2"></i>example@@vu.edu.pk</a>
								</li>
							</ul>
						</div>
					</div>

					{/* <!-- Box item --> */}
					<div className="col-lg-4 mt-lg-0" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
						<div className="card card-body shadow py-5 text-center h-100 bg-secondary">
							{/* <!-- Title --> */}
							<h5 className="mb-3">Contact Address</h5>
							<ul className="list-inline mb-0">
								{/* <!-- Address --> */}
								<li className="list-item mb-3 h6 fw-light">
									<a href="#" className="text-white"> <i className="fas fa-fw fa-map-marker-alt me-2 mt-1"></i>Virtual University Campus, West Canal Road, Abdullahpur, Faisalabad, Punjab</a>
								</li>
								{/* <!-- Phone number --> */}
								<li className="list-item mb-3 h6 fw-light">
									<a href="#" className="text-white"> <i className="fas fa-fw fa-phone-alt me-2"></i>(041) 8720084 </a>
								</li>
								{/* <!-- Email id --> */}
								<li className="list-item mb-0 h6 fw-light">
									<a href="#" className="text-white"> <i className="far fa-fw fa-envelope me-2"></i>example@vu.edu.pk </a>
								</li>
							</ul>
						</div>
					</div>

					{/* <!-- Box item --> */}
					<div className="col-lg-4 mt-lg-0" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
						<div className="card card-body shadow py-5 text-center h-100 bg-info">
							{/* <!-- Title --> */}
							<h5 className="mb-3">Main Office Address</h5>
							<ul className="list-inline mb-0">
								{/* <!-- Address --> */}
								<li className="list-item mb-3 h6 fw-light">
									<a href="#" className="text-white"> <i className="fas fa-fw fa-map-marker-alt me-2 mt-1"></i>Virtual University Campus (Faisal Town), 939, Block-C, Moulana Shaukat Ali Road, Lahore </a>
								</li>
								{/*  Phone number  */}
								<li className="list-item mb-3 h6 fw-light" >
									<a href="#" className="text-white"> <i className="fas fa-fw fa-phone-alt me-2"></i> (042) 35163854 </a>
								</li>
								{/*  Email id  */}
								<li className="list-item mb-0 h6 fw-light">
									<a href="#" className="text-white"> <i className="far fa-fw fa-envelope me-2"></i>example@vu.edu.pk </a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}
