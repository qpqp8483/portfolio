
$(function(){
	injeinc.init(); //페이지기본이벤트
	injeinc.modal(); //모달관련함수
});

$(window).resize(function(){

});

/*Injeinc Libary*/
var injeinc = {
	'init':function(){
		injeinc.pageEvent();
		injeinc.tab();
		injeinc.datepicker();
		injeinc.wordLength();
		injeinc.fileBtn();
	},
	'pageEvent':function(){
		addInputHandler({input:$(".onlyNum"),dataType:"N",maxlength:7});
		addInputHandler({input:$(".onlyEng"),dataType:"AP"});
		addInputHandler({input:$(".engNum"),dataType:"AN"});
		addInputHandler({input:$(".onlyHan"),dataType:"HA"});

		function addInputHandler(conditions){
			var $input = conditions.input;
			var dataType = conditions.dataType;
			if((!$input) || (!dataType)){
				return;
			}

			var handlerFunc = conditions.handler;
			if((!handlerFunc)){
				handlerFunc = function(event){
					var regEx = null;
					if(dataType == "N"){
						regEx = /[^0-9]/gi;
					}else if(dataType == "AP"){
						regEx = /[^a-z]/gi;
					}else if(dataType == "AN"){
						regEx = /[^a-z0-9]/gi;
					}else if(dataType == "HA"){
						regEx = /[a-z0-9]/gi;
					}else{
						return;
					}
					remainOnlyTargetValue(regEx, $(this), event);
					//return true;
				};  // end of handlerFunc
			} // end of if to check handlerFunc
			$input.on("keydown",handlerFunc);
			$input.on("keyup",handlerFunc);
			$input.on("focusout",handlerFunc);
		}

		function remainOnlyTargetValue(regEx, $input, event) {
			if((!(event.keyCode >= 34 && event.keyCode <= 40)) && event.keyCode != 16){
				var inputVal = $input.val();
				if(regEx.test(inputVal)){
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
					$input.val(inputVal.replace(regEx,''));
				}
			}
		}
	},
	'tab':function(){
		$(".tabContent").each(function(){
			var tabBar = $(this).children(".tabBar");
			var tabPage = $(this).children(".tabPage");
			if(!$(this).hasClass("notUsed")){
				if(tabBar.children("li.active").length == 0 && !tabBar.children("li").eq(0).children("a").hasClass("useLink")){
					injeinc.tabReset($(this));
					tabBar.children("li").eq(0).addClass("active");
					tabPage.eq(0).addClass("active");
				}
				tabBar.children("li").children("a").unbind("click").click(function(e){ //탭버튼 클릭이벤트
					if(!$(this).hasClass("useLink")){
						e.preventDefault();
						injeinc.tabReset($(this));
						$(this).parent().parent().siblings(".tabPage").eq($(this).parent().index()).addClass("active");
						$(this).parent().addClass("active");
					}
				}).keydown(function(e){
					if($(this).parent().hasClass("active") && e.keyCode == 9 && e.shiftKey==false){
						var focusItem = injeinc.findFocusItem($(this).parents(".tabBar").eq(0).siblings(".tabPage.active"));
						if(focusItem.length == 0 || $(this).hasClass("useLink")){
							if($(this).parent().next().children("a").length > 0){
								e.preventDefault();
								$(this).parent().next().children("a").trigger("click").focus();
							}else if($(this).parents(".tabContent").eq(1).length > 0){
								$(this).parents(".tabContent").eq(1).find(".tabBar li.active").next().children("a").trigger("click");
							}
						}else{
							e.preventDefault();
							for(i=0;i<focusItem.length;i++){
								if(focusItem.eq(i).css("display") != "none"){
									focusItem.eq(i).focus();
									break;									
								}
							}
						}
					}
				});
			}
		});
		$(".tabPage").each(function(){
			if(!$(this).parent(".tabContent").hasClass("notUsed")){
				var focusItem = injeinc.findFocusItem($(this)); //탭페이지 포커스 이동
				if(focusItem.length > 0){
					focusItem.last().unbind("keydown").keydown(function(e){
						var inTabPage = $(this).parents(".tabPage").eq(0);
						var inTabBar = inTabPage.siblings(".tabBar");
						var target = inTabBar.children("li.active").next();
						if(e.keyCode == 9 && target.length > 0){
							e.preventDefault();
							if(!target.children("a").hasClass("useLink")){
								target.children("a").trigger("click");
							}else{
								inTabBar.children("li").removeClass("active");
								target.addClass("active");
							}
							target.children("a").focus();
						}
					});
				}
			}
		});
	},
	'tabReset':function(tabItem){
		if(tabItem.hasClass("tabContent")){
			tabItem.children(".tabBar").children("li.active").removeClass("active");
			tabItem.children(".tabPage").removeClass("active");
		}else{
			tabItem.parents(".tabContent").eq(0).children(".tabBar").children("li.active").removeClass("active");
			tabItem.parents(".tabContent").eq(0).children(".tabPage").removeClass("active");
		}
	},
	'datepicker':function(){
		var holidayData = [
			{'mmdd':'1-1','title':'신정'},
			{'mmdd':'3-1','title':'3.1절'},
			{'mmdd':'5-5','title':'어린이날'},
			{'mmdd':'5-10','title':'석가탄신일'},
			{'mmdd':'6-6','title':'현충일'},
			{'mmdd':'8-15','title':'광복절'},
			{'mmdd':'10-3','title':'개천절'},
			{'mmdd':'10-9','title':'한글날'},
			{'mmdd':'12-25','title':'크리스마스'}
		];

		$(".useDatepicker").each(function(){
			if(!$(this).hasClass(".hasDatepicker")){
				var minDate = $(this).attr("data-minDate");
				var maxDate = $(this).attr("data-maxDate");
				var dateFormat = "yy-mm-dd";
				if($(this).attr("data-format")){
					dateFormat = $(this).attr("data-format");
				}
				$(this).datepicker({
					prevText: '이전 달',
					nextText: '다음 달',
					monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
					monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
					dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
					dayNamesShort: ['일','월','화','수','목','금','토'],
					dayNamesMin: ['일','월','화','수','목','금','토'],
					dateFormat: dateFormat,
					showMonthAfterYear: true,
					yearSuffix: '&nbsp;/&nbsp;',
					minDate: minDate,
					maxDate: maxDate,
					changeMonth: true,
					changeYear: true,
					yearRange: 'c-100:c+0',
					showOn: "both",
					buttonImage: "/images/common/icon_datepicker.png",
					beforeShowDay: function(date){
						var holidayCheck = false;
						var mmdd = (date.getMonth() + 1)+"-"+date.getDate();
						for(var i=0; i<holidayData.length; i++){
							if(holidayData[i].mmdd == mmdd){
								holidayCheck = true;
								return [true, "date-holiday", holidayData[i].title];
								break;
							}
						}
						if(holidayCheck == false){
							return [true, ""];
						}
					},
					onSelect: function(selectedDate){
					},
					onClose: function(selectedDate){
						if($(this).hasClass("dateFrom")) {
							if(selectedDate != "" && $(this).parent().children(".dateTo").val() != ""){
								if(selectedDate >= $(this).parent().children(".dateTo").val()){
									alert("시작날짜는 종료날짜보다 작아야 합니다.");
									$(this).val("");
									return;
								}
							}
						}else if($(this).hasClass("dateTo")) {
							if(selectedDate != "" && $(this).parent().children(".dataFrom").val() != ""){
								if($(this).parent().children(".dateFrom").val() >= selectedDate){
									alert("종료날짜는 시작날짜보다 커야 합니다.");
									$(this).val("");
									return;
								}
							}
						}
					}
				});
			}
		});
		$(".useMonthpicker").each(function(){
			$(this).monthpicker({
				showOn: "focus",
				monthNames: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
				monthNamesShort: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
				changeYear: false,
				yearRange: 'c-2:c+2',
				dateFormat: 'yy-mm',
				onSelect: function(){	
				},
				onClose: function(selectedMonth){
					if($(this).hasClass("dateFrom")) {
						if(selectedMonth != "" && $(this).parent().children(".dateTo").val() != ""){
							if(selectedMonth > $(this).parent().children(".dateTo").val()){
								//inputCaptionOpen($("#monthTo"), "시작월은 종료월보다 작아야 합니다.");
								alert("시작월은 종료월보다 작아야 합니다.");
								$("#monthFrom").val("");
								return;
							}
						}
					}else if($(this).hasClass("dateTo")) {
						if(selectedMonth != "" && $(this).parent().children(".dataFrom").val() != ""){
							if($(this).parent().children(".dateFrom").val() > selectedMonth){
								//inputCaptionOpen($("#monthTo"), "종료월은 시작월보다 커야 합니다.");
								alert("종료월은 시작월보다 커야 합니다.");
								$("#monthTo").val("");
								return;
							}
						}
					}
				}
			});
		});
	},
	'fileBtn':function(){
		$("input.fileBtn").each(function(){
			if($(this).css("display") != "none"){
				var file_name = $(this).attr("id");
				var file_class = $(this).attr("class").replace("fileBtn","");
				$(this).after('<span id="for_'+file_name+'"><input type="text" class="'+file_class+'" value="" title="사진"> <a href="#" class="btn_inline for_fileBtn">찾아보기</a></span>');
				$(this).hide();
				$(this).change(function(){
					$("#for_"+file_name+" input[type='text']").val($(this).val());
				});
				$("#for_"+file_name+" .for_fileBtn").click(function(e){
					e.preventDefault();
					var id = $(this).parent().attr("id").replace("for_","");
					$("#"+id).click();
				});
			}
		});
	},
	'wordLength':function(){
		$("textarea").each(function(){
			if($(this).attr("data-limitByte")){
				var textName = "none";
				if($(this).attr("name")){
					textName = $(this).attr("name");
				}
				limitByte = parseInt($(this).attr("data-limitByte"));
				if($("wordCount_"+textName).length == 0){
					$(this).after('<span id="wordCount_'+textName+'" class="wordCount"><b>0</b> / '+limitByte+' Byte</span>');
				}
				$(this).keyup(function(){
					return injeinc.wordLimit($(this));
				});
				injeinc.wordLimit($(this));
			}
		});
	},
	'wordLimit':function(textareaObj){
		textName = textareaObj.attr("name");
		limitByte = parseInt(textareaObj.attr("data-limitByte"));
		var totalByte = 0;
		var limitLength = 0;
		var message = textareaObj.val();
		for(var i =0; i < message.length; i++){
			var currentByte = message.charCodeAt(i);
			if(currentByte > 128) totalByte += 2;
			else totalByte++;
			if(totalByte > limitByte){
				limitLength = i;
				textareaObj.val(message.substring(0,limitLength));
				totalByte = limitByte;
				break;
				return;
			}
		}
		$("#wordCount_"+textName+" b").text(totalByte);
	},
	'ajaxLinkBox':function(){
		$(".ajaxLinkBox").each(function(){
			if($(this).attr("data-url")){
				var _url = $(this).attr("data-url");
				var _param = "";
				var _target = $(this);
				if($(this).attr("data-param")){
					_param = $(this).attr("data-param");
				}
			    $.ajax({
			        type:"POST",
			        url:_url,
			        dataType:"text",
			        data:_param,
			        timeout:10000,
			        success:function(data){
			        	_target.addClass("active").html(data);
			        },
			        error: function(response){
			        	console.log(response);
			        }
			    });
			}
		});
	},
	'modal':function(){
		$(document).on("click",".btn_modalOpen",function(e){
			e.preventDefault();
			var targetModal = $(this).attr("href");
			injeinc.modalOpen(targetModal);
		});
		$(document).on("click","#overlay, .btn_modalClose",function(e){
			injeinc.modalClose();
			$("#allMenu").removeClass("active");
		});
	},
	'modalOpen':function(id){
		$(window).scrollTop(0);
		$("#overlay").addClass("active");
		$(id).addClass("active");
		$(id).find(".btn_modalClose").eq(0).focus();
	},
	'modalClose':function(){
		var modalId = $(".modalWrap.active").attr("id");
		$(".modalWrap").removeClass("active");
		$("#overlay").removeClass("active");
		$("a.btn_modalOpen[href='#"+modalId+"']").focus();
	},
	'findFocusItem':function(area){
		return area.find("input, select, textarea, button, a");
	}
	
};