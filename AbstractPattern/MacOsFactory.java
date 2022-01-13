package AbstractPattern;

public class MacOsFactory  implements GUIFactory{
    
    public Button createButton(){
        return new MacOSButton();
    }
    public CheckBox createCheckBox(){
        return new MacOsCheckBox();
    }
}
