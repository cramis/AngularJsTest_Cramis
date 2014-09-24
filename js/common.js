function add(x, y)
{
	return x + y;
}


// 숫자로만 입력되었는지 확인
function isValidNumberStyle(val)
{
    

    var regExp = /^[-]?\d+(?:[.]\d+)?$/;
		
    if ( !regExp.test( val ) ) {
        return false
    }
		
    return true;
}


// 계좌번호 검증
function isValidBankCsh(val)
	{
    var regExp = /[0-9,\-]{3,6}\-[0-9,\-]{2,6}\-[0-9,\-]/;
		
		if ( !regExp.test( val ) ) {
		return false
		}
		
		return true;
	}
	
	// 이메일 검증
	function isValidEmail(val)
	{
		var regExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		
		if ( !regExp.test( val ) ) {
		return false
		}
		
		return true;
	}
	
		// 휴대폰 검증
	
	function isValidHP(val)
	{
		var regExp = /^01[016789]-\d{3,4}-\d{4}$/g;
		
		if ( !regExp.test( val ) ) {		
		return false
		}
		
		return true;
	}
	

		// 날짜검증
	
	function isValidDate(val)
	{
		//var regExp = /^(\d{4})(\/|-|.)(\d{1,2})(\/|-|.)(\d{1,2})$/;
		var regExp =/^(19|20)\d{2}(\/|-|.)*(0[1-9]|1[0-2])(\/|-|.)*(0[1-9]|1\d|2\d|3[01])$/;
		
		if ( !regExp.test( val ) ) {		
		return false
		}
		
		return true;
	}
	
	function isValidTel(val)
	{
		var regExp = /^(0)\d{1,2}-\d{3,4}-\d{4}$/g;
		
		if ( !regExp.test( val ) ) {		
		return false
		}
		
		return true;
	}
	
	// 숫자인지 확인 - 맞으면 true 리턴
   function isNumber(obj)
   {
		if(typeof obj == "number")   	
		{
			return true;
		}
		
		return false;
   }
   
   
   	// 문자인지 확인 - 맞으면 true 리턴
   function isString(obj)
   {
		if(typeof obj == "string")   	
		{
			return true;
		}
		
		return false;
   }

// 영문대소문자, 특수문자, 숫자 3가지 모두 포함하며 9개 이상인 비밀번호만 가능!
// 0 : 정상
// -1 : 텍스트 문자가 아님
// -2 : 9자 이상이 아님
// -3 : 영문대소문자, 특수문자, 숫자 3가지 모두 안들어가 있음
function VerifySecurityPassword(val)
{
    // 텍스트문자가 아니면 false  = -1
    if(!isString(val))   	
    {
        return -1;
    }

    // 9자 이상이면 false = -2
    if (val.length < 9)
    {
        return -2;
    }


    // 영문대소문자, 특수문자, 숫자 3가지 모두 들어갔는지 확인 = -3
    var regExp = /^(?=.*?[a-zA-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-+_/,.~`]).{9,}$/;

		
    if ( !regExp.test( val ) ) {		
        return -3;
    }
		
        return 0;
}


function ValidatePasswords(oldPwd, newPwd1, newpwd2) {

    var result = -99;

    if (oldPwd == "")
    {
        return -6;
    }

    // 새로운 패스워드와 패스워드 확인이 서로 틀리면 안됨 = -4

    if (newPwd1 != newpwd2)
    {
        return -4;
    }

    // 현재 패스워드와 새로운 패스워드가 같으면 안됨 = -5
    if (oldPwd == newPwd1) {
        return -5;
    }

    // 새로운 패스워드가 강력한 보안조치가 되어있는지 확인
    result = VerifySecurityPassword(newPwd1);


    return result;
}



