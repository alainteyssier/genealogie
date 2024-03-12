/*--- Avanquest WebEasy Motion Script ---*/


function OnWeLoad()
{
	IDP[1]=(V5)?'document.getElementById(\'e5\').style.visibility':(IE)?'e5.style.visibility':'document.e5.visibility';
	IDP[2]=(V5)?'document.getElementById(\'e4\').style.visibility':(IE)?'e4.style.visibility':'document.e4.visibility';
	IDP[3]=(V5)?'document.getElementById(\'e2\').style.visibility':(IE)?'e2.style.visibility':'document.e2.visibility';
	window.setTimeout('DoBlink(IDP[1],1,0,0,1000,0,1000)',0);
	window.setTimeout('DoBlink(IDP[2],1,0,0,1000,0,1000)',0);
	window.setTimeout('DoBlink(IDP[3],1,0,0,1000,0,1000)',0);
}


/*--- EndOfFile ---*/
