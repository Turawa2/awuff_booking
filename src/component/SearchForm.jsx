import React from 'react'

function SearchForm() {
  return (
    <>
    
    <section  class="travel-box">
        	<div class="container">
        		<div class="row">
        			<div class="col-md-12">
        				<div class="single-travel-boxes">
        					<div id="desc-tabs" class="desc-tabs">

								<ul class="nav nav-tabs" role="tablist">


									<li role="presentation">
										<a href="#hotels" aria-controls="hotels" role="tab" data-toggle="tab">
											<i class="fa fa-building"></i>
											hotels
										</a>
									</li>

								
								</ul>

								
								<div class="tab-content">

									<div role="tabpanel" class="tab-pane active fade in" id="tours">
										<div class="tab-para">

											<div class="row">
												<div class="col-lg-4 col-md-4 col-sm-12">
													<div class="single-tab-select-box">

														<h2>destination</h2>

														<div class="travel-select-icon">
															<input type="search" class="form-control " placeholder='Enter your location'/>

															
														</div>

                                                        <div class="travel-select-icon">
															<input type="search" class="form-control " placeholder='Enter your location'/>

															
														</div>

													</div>
												</div>

												<div class="col-lg-2 col-md-3 col-sm-4">
													<div class="single-tab-select-box">
														<h2>check in</h2>
														<div class="travel-check-icon">
															<form action="#">
																<input type="text" name="check_in" class="form-control" data-toggle="datepicker" placeholder="12 -01 - 2017 "/>
															</form>
														</div>
													</div>
												</div>

												<div class="col-lg-2 col-md-3 col-sm-4">
													<div class="single-tab-select-box">
														<h2>check out</h2>
														<div class="travel-check-icon">
															<form action="#">
																<input type="text" name="check_out" class="form-control"  data-toggle="datepicker" placeholder="22 -01 - 2017 "/>
															</form>
														</div>
													</div>
												</div>

												<div class="col-lg-2 col-md-1 col-sm-4">
													<div class="single-tab-select-box">
														<h2>duration</h2>
														<div class="travel-select-icon">
															<select class="form-control ">

															  	<option value="default">5</option>

															  	<option value="10">10</option>

															  	<option value="15">15</option>
															  	<option value="20">20</option>

															</select>
														</div>
													</div>
												</div>

												<div class="col-lg-2 col-md-1 col-sm-4">
													<div class="single-tab-select-box">
														<h2>members</h2>
														<div class="travel-select-icon">
															<select class="form-control ">

															  	<option value="default">1</option>

															  	<option value="2">2</option>

															  	<option value="4">4</option>
															  	<option value="8">8</option>

															</select>
														</div>
													</div>
												</div>

											</div>

											<div class="row">
												<div class="col-sm-5">
													<div class="travel-budget">
														<div class="row">
															<div class="col-md-3 col-sm-4">
																<h3>budget : </h3>
															</div>
															<div class="co-md-9 col-sm-8">
																<div class="travel-filter">
																	<div class="info_widget">
																		<div class="price_filter">
																			
																			<div id="slider-range"></div>

																			<div class="price_slider_amount">
																				<input type="text" id="amount" name="price"  placeholder="Add Your Price" />
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="clo-sm-7">
													<div class="about-btn travel-mrt-0 pull-right">
														<button  class="about-view travel-btn">
															search	
														</button>
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

        </section>
    </>
  )
}

export default SearchForm
