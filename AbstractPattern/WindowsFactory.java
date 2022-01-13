package AbstractPattern;

public class WindowsFactory implements GUIFactory {
    public Button createButton() {
        return new WindowButton();
    }
    public CheckBox createCheckBox() {
        return new WindowsCheckBox();
    }
}
