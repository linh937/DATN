function My_account(){
    return(
            
 <div className="">
<div className="site-wrapper">
<nav aria-label="breadcrumb" className="breadcrumb-wrapper">
	<div className="container">
		<ol className="breadcrumb">
			<li className="breadcrumb-item"><a href="index.html">Home</a></li>
			<li className="breadcrumb-item active" aria-current="page">My Account</li>
		</ol>
	</div>
</nav>

<div className="page-section sp-inner-page">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="row">
						
						<div className="col-lg-3 col-12">
							<div className="myaccount-tab-menu nav" role="tablist">
								<a href="#dashboad" className="active" data-bs-toggle="tab"><i className="fas fa-tachometer-alt"></i>
									Dashboard</a>

								<a href="#orders" data-bs-toggle="tab"><i className="fa fa-cart-arrow-down"></i> Orders</a>

								<a href="#download" data-bs-toggle="tab"><i className="fas fa-download"></i> Download</a>

								<a href="#payment-method" data-bs-toggle="tab"><i className="fa fa-credit-card"></i> Payment
									Method</a>

								<a href="#address-edit" data-bs-toggle="tab"><i className="fa fa-map-marker"></i> address</a>

								<a href="#account-info" data-bs-toggle="tab"><i className="fa fa-user"></i> Account Details</a>

								<a href="login-register.html"><i className="fas fa-sign-out-alt"></i> Logout</a>
							</div>
						</div>
						
						<div className="col-lg-9 col-12 mt--30 mt-lg-0">
							<div className="tab-content" id="myaccountContent">

								<div className="tab-pane fade show active" id="dashboad" role="tabpanel">
									<div className="myaccount-content">
										<h3>Dashboard</h3>

										<div className="welcome mb-20">
											<p>Hello, <strong>Alex Tuntuni</strong> (If Not <strong>Tuntuni !</strong><a href="login-register.html" className="logout"> Logout</a>)</p>
										</div>

										<p className="mb-0">From your account dashboard. you can easily check &amp; view your
											recent orders, manage your shipping and billing addresses and edit your
											password and account details.</p>
									</div>
								</div>
								
								<div className="tab-pane fade" id="orders" role="tabpanel">
									<div className="myaccount-content">
										<h3>Orders</h3>

										<div className="myaccount-table table-responsive text-center">
											<table className="table table-bordered">
												<thead className="thead-light">
												<tr>
													<th>No</th>
													<th>Name</th>
													<th>Date</th>
													<th>Status</th>
													<th>Total</th>
													<th>Action</th>
												</tr>
												</thead>

												<tbody>
												<tr>
													<td>1</td>
													<td>Mostarizing Oil</td>
													<td>Aug 22, 2018</td>
													<td>Pending</td>
													<td>$45</td>
													<td><a href="cart.html" className="btn">View</a></td>
												</tr>
												<tr>
													<td>2</td>
													<td>Katopeno Altuni</td>
													<td>July 22, 2018</td>
													<td>Approved</td>
													<td>$100</td>
													<td><a href="cart.html" className="btn">View</a></td>
												</tr>
												<tr>
													<td>3</td>
													<td>Murikhete Paris</td>
													<td>June 12, 2017</td>
													<td>On Hold</td>
													<td>$99</td>
													<td><a href="cart.html" className="btn">View</a></td>
												</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								
								<div className="tab-pane fade" id="download" role="tabpanel">
									<div className="myaccount-content">
										<h3>Downloads</h3>

										<div className="myaccount-table table-responsive text-center">
											<table className="table table-bordered">
												<thead className="thead-light">
												<tr>
													<th>Product</th>
													<th>Date</th>
													<th>Expire</th>
													<th>Download</th>
												</tr>
												</thead>

												<tbody>
												<tr>
													<td>Mostarizing Oil</td>
													<td>Aug 22, 2018</td>
													<td>Yes</td>
													<td><a href="#" className="btn">Download File</a></td>
												</tr>
												<tr>
													<td>Katopeno Altuni</td>
													<td>Sep 12, 2018</td>
													<td>Never</td>
													<td><a href="#" className="btn">Download File</a></td>
												</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="payment-method" role="tabpanel">
									<div className="myaccount-content">
										<h3>Payment Method</h3>

										<p className="saved-message">You Can't Saved Your Payment Method yet.</p>
									</div>
								</div>
								
								<div className="tab-pane fade" id="address-edit" role="tabpanel">
									<div className="myaccount-content">
										<h3>Billing Address</h3>

										<address>
											<p><strong>Alex Tuntuni</strong></p>
											<p>1355 Market St, Suite 900 <br/>
												San Francisco, CA 94103</p>
											<p>Mobile: (123) 456-7890</p>
										</address>

										<a href="#" className="theme-btn"><i className="fa fa-edit"></i>Edit Address</a>
									</div>
								</div>

								<div className="tab-pane fade" id="account-info" role="tabpanel">
									<div className="myaccount-content">
										<h3>Account Details</h3>

										<div className="account-details-form">
											<form action="#">
												<div className="row">
													<div className="col-lg-6 col-12 mb-30">
														<input id="first-name" placeholder="First Name" type="text"/>
													</div>

													<div className="col-lg-6 col-12 mb-30">
														<input id="last-name" placeholder="Last Name" type="text"/>
													</div>

													<div className="col-12 mb-30">
														<input id="display-name" placeholder="Display Name" type="text"/>
													</div>

													<div className="col-12 mb-30">
														<input id="email" placeholder="Email Address" type="email"/>
													</div>

													<div className="col-12 mb-30"><h4>Password change</h4></div>

													<div className="col-12 mb-30">
														<input id="current-pwd" placeholder="Current Password" type="password"/>
													</div>

													<div className="col-lg-6 col-12 mb-30">
														<input id="new-pwd" placeholder="New Password" type="password"/>
													</div>

													<div className="col-lg-6 col-12 mb-30">
														<input id="confirm-pwd" placeholder="Confirm Password" type="password"/>
													</div>

													<div className="col-12">
														<button className="theme-btn">Save Changes</button>
													</div>

												</div>
											</form>
										</div>
									</div>
								</div>
								
							</div>
						</div>
						
					</div>

				</div>
			</div>
		</div>
    </div>

</div>
</div>
    )
}
export default My_account