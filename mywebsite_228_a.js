/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	IDP[1]=(V5)?'document.getElementById(\'e1\').style.visibility':(IE)?'e1.style.visibility':'document.e1.visibility';
	window.setTimeout('DoBlink(IDP[1],1,0,0,1000,0,1000)',1000);
}


/*--- EndOfFile ---*/
