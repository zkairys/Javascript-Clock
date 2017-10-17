function setDate(){
	const now = new Date();

	//seconds
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	const secondsHand = document.querySelector('.sec-hand');
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

	//minutes
	const mins = now.getMinutes();
   	const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
	const minHand = document.querySelector('.min-hand');
   	minHand.style.transform = `rotate(${minsDegrees}deg)`;

	//hours   
   	const hour = now.getHours();
   	const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
	const hourHand = document.querySelector('.hour-hand');
   	hourHand.style.transform = `rotate(${hourDegrees}deg)`

	// this if fixed the transition on seconds

	if (now.getSeconds() > 1 ){
		secondsHand.style.transition = 'all 0.5s';	
	}  else {
		secondsHand.style.transition = '';
	}
	

};

setInterval(setDate, 100);




	

