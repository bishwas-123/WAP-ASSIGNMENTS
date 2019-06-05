var screen=document.getElementById("accountScreen");
var Account = (function() {
    const accountList = [];
    const createAccount = function(details) {
        accountList.push(details);

    }
    function showAccount(){
       return accountList;
    }
    return {
        createAccount: createAccount,
        show:showAccount
    };
    })();

    let name=document.getElementById("accountName");
    let deposit=document.getElementById("deposit");
    const account=Account;
    let details="Account Name:"+name.value+" Balance:"+deposit.value;
    alert(details);
    var click=document.getElementById("newAccount");
    click.onclick=account.createAccount(details);
    let res=account.show();
    alert(res[0]);
//     const musicModule = musicPlayer(); // invoke our musicPlayer to return it's object (module)
// musicModule.playMusic(); // 'Im playing the next song!'
// musicModule.pauseMusic(); // 'I'm paused!'
// musicModule.showNextTrack();