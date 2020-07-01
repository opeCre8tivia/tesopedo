
//Jquery dropdown:


$(document).ready(function(){
	$('.about').hover(function(){
		$('.drop-down').slideDown('slow');
	});

	$('.drop-down').mouseleave(function(){
		$(this).slideUp('slow');
	});
});



//jquery section


$(document).ready(function(){
	$('#transparent-cover').hover(function(){
		$(this).css(hovering);
		$('#btn').css(hovering);
	});
});


// flipping the phone nav

let nav = document.querySelector('[phone-nav]');
// animating variables and function

$(document).ready(function(){
	$('[humberger]').click(function(){
		$('[phone-nav]').slideToggle('slow');
	});
});

// toggling the blur when humberger is clicked

         //--VARIABLES NEEDED
let blurer = document.querySelector('#main-wrapper');
let btn = document.getElementById('humberger');
let counter = 0;

// function that resets the counter to 0

const reset = (counter) =>{
	if(counter > 2){
		counter = 0;
		console.log(`this is reseter at ${counter}`);
		return counter;

	}
	else{
		if(counter === 1){
			blurer.style.opacity = 0.5;
		}

		else if (counter === 2){

			blurer.style.opacity = 1;
		}

		else{
				//btn.addEventListener('click');
		}
		console.log(counter);
	}

};

const bluringContent = () => {
	btn.addEventListener('click', (e)=>{
		let counterStep = 1;
		counter += counterStep;

		reset(counter);

		
	},false);
};

bluringContent();
console.log('By Cre8tivia team');