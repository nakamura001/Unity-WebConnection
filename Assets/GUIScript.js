var testText : String;

function Awake () {
	testText = "ここのテキストをJavaScriptに送る";
}

function OnGUI () {
	GUILayout.BeginArea (Rect (5, 5, Screen.width-10, 100));
	testText = GUILayout.TextField (testText, 100);
	if(GUILayout.Button ("WebページのJSへ送る")) {
		Application.ExternalCall( "SayHello", testText );
	} 
	GUILayout.EndArea (); 
}
