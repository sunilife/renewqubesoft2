function includeHeader() {
	document.write(`

		<div id="all_wrap">

		    <div id="header" class="on">
			
				<h1><a href="main.html"><img src="img/qb_logo.svg" alt="Qubesoft"></a></h1>
				<div class="nav">
					<ul class="navbar">
						<li class="dropdown">
							<a href="sub1.html" class="dropbtn">태양광발전 모니터링</a>
							<!-- <ul class="dropdown-content">
								<li><a href="#">태양광발전 모니터링</a></li>
								<li><a href="#">태양광발전 접속반</a></li>
								<li><a href="#">무선온습도 모니터링</a></li>
							</ul> -->
						</li>
						<li class="dropdown">
							<a href="sub2.html" class="dropbtn">O&M 서비스</a>
							<!-- <ul class="dropdown-content">
								<li><a href="#">태양광발전 모니터링</a></li>
								<li><a href="#">태양광발전 접속반</a></li>
								<li><a href="#">무선온습도 모니터링</a></li>
							</ul> -->
						</li>
						<li class="dropdown">
							<a href="sub3.html" class="dropbtn">전력중개사업</a>
							<!-- <ul class="dropdown-content">
								<li><a href="#">태양광발전 모니터링</a></li>
								<li><a href="#">태양광발전 접속반</a></li>
								<li><a href="#">무선온습도 모니터링</a></li>
							</ul> -->
						</li>
						<li class="dropdown">
							<a href="sub4.html" class="dropbtn">IOT 제품</a>
							<!-- <ul class="dropdown-content">
								<li><a href="#">태양광발전 모니터링</a></li>
								<li><a href="#">태양광발전 접속반</a></li>
								<li><a href="#">무선온습도 모니터링</a></li>
							</ul> -->
						</li>
						<li class="dropdown">
							<a href="sub5_1.html" class="dropbtn">고객센터</a>
							<ul class="dropdown-content">
								<li><a href="sub5_1.html">자주 묻는 질문</a></li>
								<li><a href="sub5_2.html">자료실</a></li>
								<li><a href="sub5_3.html">고객문의</a></li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="sub6.html" class="dropbtn">회사소개</a>
							<!-- <ul class="dropdown-content">
								<li><a href="#">태양광발전 모니터링</a></li>
								<li><a href="#">태양광발전 접속반</a></li>
								<li><a href="#">무선온습도 모니터링</a></li>
							</ul> -->
						</li>
					</ul>
				</div>

				<button type="button" class="btn_ham"><img src="img/hamburg.svg" alt="전체메뉴 보기"></button>

				<script type="text/javascript">
					let hamburgBtn = document.querySelector('.btn_ham');
					let moNav = document.querySelector('.nav');
					let closeBtn = document.querySelector('.btn_close');

					hamburgBtn.addEventListener('click', () =>{
						moNav.classList.toggle('on');						
					});

				</script>
			
		</div>

		`);
}

function includeFooter() {

	document.write(`

		    <div id="footer">
			<div class="footer_wrap">
				<div>
					<img src="img/f_logo.svg" class="f_logo" alt="Qubesoft"><br>
					<span class="copyright">© 2021 Qubesoft, Inc.</span>
				</div>
				<div>
					<strong>(주) 큐브소프트</strong> (대표 : 박영규)<br>     
					본사. 서울시 구로구 경인로 662. 15층 121호<br>
					공장/연구소. 경기도 오산시 외삼미로15번길 54-2. 큐브빌딩<br>
					<br>
					<button type="button" class="terms">이용약관</button> <button type="button">개인정보처리방침</button>
					<script type="text/javascript">
						let termsBtn = document.querySelector('.terms');
						let popUp = document.querySelector('.pop_bg');

						termsBtn.addEventListener('click', () =>{
							popUp.classList.add('on');						
						});

					</script>
				</div>
				<div>
					<strong>대표전화. 02-6053-6400</strong><br>
					팩스. 02-6053-6415
				</div>
				<div>
					<strong>업무시간.</strong><br>
					평일오전 09:00~11:40<br>
					평일오후 13:00~18:00
				</div>
			</div>
		</div>
	</div>
</body>
</html>
		`);

}
