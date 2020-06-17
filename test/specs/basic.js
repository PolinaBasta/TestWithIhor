describe('Main Page',() => {
    it('should Title main page is present', function () {
        browser.url('https://stage.pasv.us/');
        const titleProgressMonitor = $("//span[@id ='site-name']");
        const text = titleProgressMonitor.getText(); //Progress Monitor
        expect(text).toEqual('Progress Monitor')// expected is from spec documentation
    });
    it('should Title main page isclickable', function () {
         const titleProgressMonitor = $("//span[@id ='site-name']");
         const result = titleProgressMonitor.isClickable(); //true or false
         expect(result).toEqual(true);

    });
    it('should Login button is present', function(){
        const loginIsPresent = $("//a[@qa='login-link']");
        const text = loginIsPresent.getText();
        expect(text).toEqual('Login');
    });
    it('should Login button isClickable', function() {
        const loginIsPresent = $("//a[@qa='login-link']");
        const result = loginIsPresent.isClickable();
        expect(result).toEqual(true);

    });
 });


