// Web -> Unity Player
function SendTextToUnity()
{
	var unity = unityObject.getObjectById("unityPlayer");
	var inputText = document.getElementById("input_text");
	unity.SendMessage("MyObject", "MyFunction", inputText.value);
}

// Unity Player -> Web
function SayHello( arg )
{
    alert( arg );
}