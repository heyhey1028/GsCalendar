let weekArr = ['月','火','水','木','金','土','日']
let nowDate = new Date();
let myYear = nowDate.getFullYear();
let MyMonth = nowDate.getMonth();
let MyDate = nowDate.getDate();
let MyHour = nowDate.getHours();
let MyMin = nowDate.getMinutes();

//--------------------初期値--------------
//--------------------------------------
$(create_week(nowDate));
$("#arrow_left").addClass("week_back")
$("#arrow_right").addClass("week_next")

$("#level").on('click',function(){
    $("#hidden_level").toggleClass("hide");
    $("#mask1").toggleClass("hide");
})

$("#mask1").on('click',function(){
    $("#hidden_level").toggleClass("hide");
    $("#mask1").toggleClass("hide");
})


//--------------Choose Level----------------
//-----------------------------------------
//------------------------------------------
function getWeek(n){
    n-=1;
    if(n<0){
        n=6;
        return n;
    }else{
        return n;
    }
};

function resetClass(){
    $("#arrow_left").removeClass("day_back")
    $("#arrow_right").removeClass("day_next")
    $("#arrow_left").removeClass("week_back")
    $("#arrow_right").removeClass("week_next")
    $("#arrow_left").removeClass("month_back")
    $("#arrow_right").removeClass("month_next")
    $("#arrow_left").removeClass("year_back")
    $("#arrow_right").removeClass("year_next")
}


$("#level_day").on('click',function(){
    console.log("leve_dayが押されました");
    $("#main").empty();
    create_Day(nowDate);
    $("#level>p").html("日")
    resetClass();
    $("#arrow_left").addClass("day_back")
    $("#arrow_right").addClass("day_next")
})
$("#level_week").on('click',function(){
    console.log("leve_weekが押されました");
    $("#main").empty();
    create_week(nowDate);
    $("#level>p").html("週")
    resetClass();
    $("#arrow_left").addClass("week_back")
    $("#arrow_right").addClass("week_next")
})
$("#level_month").on('click',function(){
    console.log("leve_monthが押されました");
    $("#main").empty();
    create_month(nowDate);
    $("#level>p").html("月");
    resetClass();
    $("#arrow_left").addClass("month_back")
    $("#arrow_right").addClass("month_next")
})
$("#level_year").on('click',function(){
    console.log("leve_yearが押されました");
    $("#main").empty();
    create_year(nowDate);
    $("#level>p").html("年")
    resetClass();
    $("#arrow_left").addClass("year_back")
    $("#arrow_right").addClass("year_next")
})

//-------------------Level:Day----------------
//---------------------------------------------
//------------------------------------------

// function reset(n){
//     n.setHours(n*0)
//     n.setMinutes(n*0)
//     n.setSeconds(n*0)
// }
// function reset_week(){
//     $("#week").removeClass("sat");
//     $("#week").removeClass("sun");
//     $("#day").removeClass("sat");
//     $("#day").removeClass("sun");

// }
function create_Day(date){
    let day_calendar = '<div id="day_calendar"></div>';
    $("#main").append(day_calendar);
    create_singleDate(date,0);
    make_timeDay(date,0);

}

// function create_singleDate(date,j){
//     let single_day= '';
//     single_day+='<div class="single_day" id="Day'+j+'">';
//     single_day+='<section class="header">';
//     single_day+='<h2></h2>'
//     single_day+='<h1></h1>'
//     single_day+='</section>'
//     single_day+='<section class="content">'
//     single_day+='<div></div>'
//     single_day+='<div></div>'
//     single_day+='</section>'
//     single_day+='</div>'
//     $("#main>div").append(single_day);
// }

// function make_timeDay(date,j){
//     let for_weekDay = '#main > div > div:eq('+j+')>.header > h2';
//     let for_Date = '#main > div > div:eq('+j+')>.header > h1';
//     reset(date)
//     let now_week = getWeek(date.getDay());
//     $(for_weekDay).html(weekArr[now_week]);
//     $(for_Date).html(date.getDate());
//     if(now_week==5){
//         $(for_weekDay).addClass("sat")
//         $(for_Date).addClass("sat")
//     }else if(now_week==6){       
//         $(for_weekDay).addClass("sun")
//         $(for_Date).addClass("sun")
//     }else{
//         $(for_weekDay).removeClass("sat");
//         $(for_weekDay).removeClass("sun");
//         $(for_Date).removeClass("sat");
//         $(for_Date).removeClass("sun");
//     }
//     for(i=1;i<96;i++){
//         date.setMinutes(date.getMinutes()+15);
//         let Time = '';
//         let schedule ='';
//         if(i%4 ==0 ){
//             Time +='<div class="show">'
//             schedule +='<div class="schedule_show">'
//         }else{
//             Time +='<div>';
//             schedule +='<div>';
//         }
//         Time += (("0"+date.getHours()).slice(-2)) +":"+ (("0"+date.getMinutes()).slice(-2)) ;
//         schedule += (("0"+date.getHours()).slice(-2)) +":"+ (("0"+date.getMinutes()).slice(-2)) ;
//         Time += '</div>';
//         schedule += '</div>';
        
//         let for_time = '#main > div > div:eq('+j+')>.content > div:eq(0)';
//         let for_schedule = '#main > div > div:eq('+(j)+')>.content > div:eq(1)';
        
//         $(for_time).append(Time);
//         $(for_schedule).append(schedule);

//     }

// }

$("body").on('click','.day_back',function(){
    nowDate.setDate(nowDate.getDate()-1); 
    $("#main").empty()
    create_Day(nowDate);
})
$("body").on('click','.day_next',function(){
    nowDate.setDate(nowDate.getDate()+1);
    $("#main").empty();
    create_Day(nowDate);
})

// function create_day(date){
//     reset(date)
//     $("#").html(weekArr[nowDate.getDay()]);
//     $("#day").html(nowDate.getDate());
//     if(nowDate.getDay()==6){
//         reset_week();
//         $("#week").addClass("sat")
//         $("#day").addClass("sat")
//     }else if(nowDate.getDay()==0){
//         reset_week();
//         $("#week").addClass("sun")
//         $("#day").addClass("sun")
//     }else{
//         reset_week();
//     }
//     for(i=1;i<96;i++){
//         console.log("ループ処理回数");
//         date.setMinutes(date.getMinutes()+15);
//         let Time = '';
//         let schedule ='';
//         if(i%4 ==0 ){
//             Time +='<div class="show">'
//             schedule +='<div class="schedule_show">'
//                 console.log(i);
//         }else{
//             Time +='<div>';
//             schedule +='<div>';
//         }
//         Time += (("0"+date.getHours()).slice(-2)) +":"+ (("0"+date.getMinutes()).slice(-2)) ;
//         schedule += (("0"+date.getHours()).slice(-2)) +":"+ (("0"+date.getMinutes()).slice(-2)) ;
//         Time += '</div>';
//         schedule += '</div>';
//         $("#time").append(Time);
//         $("#schedule").append(schedule);
//     }

// }

//----------Level:Week----------------------
//--------------------------------------
//---------------------------------------


function reset(n){
    n.setHours(n*0)
    n.setMinutes(n*0)
    n.setSeconds(n*0)
}

function reset_week(date){
    let week_today = date.getDay();
    switch(week_today){
        case 0:
        date.setDate(date.getDate()-6);
        break;
        case 1:
        date.setDate(date.getDate()-0);
        break;
        case 2:
        date.setDate(date.getDate()-1);
        break;
        case 3:
        date.setDate(date.getDate()-2);
        break;
        case 4:
        date.setDate(date.getDate()-3);
        break;
        case 5:
        date.setDate(date.getDate()-4);
        break;
        case 6:
        date.setDate(date.getDate()-5);
        break;
    }
    return date;
}

function create_week(date){
    let week_calendar = '<div id="single_week"><div class="time_header"></div><div id="week_calendar"></div></div>'
    $("#main").append(week_calendar);
    date = reset_week(date);
    create_timeHeader(date);
    for(let j=0;j<7;j++){
        create_singleDay(date,j);
        make_time(date,j)
        date.setDate(date.getDate()+1);
    }
    date.setDate(date.getDate()-7)
    console.log("最終的なdateは"+date);
}


function create_singleDay(date,j){
    let single_day= '';
    single_day+='<div class="single_day" id="Day'+j+'">';
    single_day+='<section class="header">';
    single_day+='<h2></h2>'
    single_day+='<h1></h1>'
    single_day+='</section>'
    single_day+='<section class="content">'
    // single_day+='<div></div>'
    single_day+='</section>'
    single_day+='</div>'
    $("#main>div>div:eq(1)").append(single_day);
}

function create_timeHeader(date){
    reset(date)
    for(i=1;i<96;i++){
        date.setMinutes(date.getMinutes()+15);
        let Time = '';
        if(i%4 ==0 ){
            Time +='<div class="show">'
        }else{
            Time +='<div>';
        }
        Time += (("0"+date.getHours()).slice(-2)) +":"+ (("0"+date.getMinutes()).slice(-2)) ;
        Time += '</div>';
        $(".time_header").append(Time);

    }
}

function make_time(date,j){
    let for_weekDay = '#main > div > div:eq("1") > div:eq('+j+')>.header > h2';
    let for_Date = '#main > div > div:eq("1") > div:eq('+j+')>.header > h1';
    reset(date)
    let now_week = getWeek(date.getDay());
    $(for_weekDay).html(weekArr[now_week]);
    $(for_Date).html(date.getDate());
    if(now_week==5){
        $(for_weekDay).addClass("sat")
        $(for_Date).addClass("sat")
    }else if(now_week==6){       
        $(for_weekDay).addClass("sun")
        $(for_Date).addClass("sun")
    }else{
        $(for_weekDay).removeClass("sat");
        $(for_weekDay).removeClass("sun");
        $(for_Date).removeClass("sat");
        $(for_Date).removeClass("sun");
    }
    for(i=1;i<96;i++){
        date.setMinutes(date.getMinutes()+15);
        let schedule ='';
        if(i%4 ==0 ){
            schedule +='<div class="schedule_show">'
        }else{
            schedule +='<div>';
        }
        schedule += (("0"+date.getHours()).slice(-2)) +":"+ (("0"+date.getMinutes()).slice(-2)) ;
        schedule += '</div>';
        let for_schedule = '#main > div > div:eq("1") > div:eq('+(j)+')>.content';
        $(for_schedule).append(schedule);

    }

}

$("body").on('click','.week_back',function(){
    nowDate.setDate(nowDate.getDate()-1);   
    $("#main").empty()
    console.log("week_backが押されました");
    create_week(nowDate);
})

$("body").on('click','.week_next',function(){
    nowDate.setDate(nowDate.getDate()+7);
    $("#main").empty();
    create_week(nowDate);
    
})


// $(".week_back").on('click',function(){
//     nowDate.setDate(nowDate.getDate()-1); 
//     $("#single_week").empty()
//     creat_week(nowDate);
// })
// $(".week_next").on('click',function(){
//     nowDate.setDate(nowDate.getDate()+1);
//     $("#single_week").empty();
//     creat_week(nowDate);
// })



//----------------------Level:Month---------------
//-------------------------------------------------
//------------------------------------------------


// function setCalendar(y,l){
//     let myDate = new Date();
//     let myToday = myDate.getDate();
//     let todayMyMonth = myDate.getMonth();
//     let $calendar = $("#month_calendar");
//     let myWeekTbl = new Array('月','火','水','木','金','土','日');
//     let myMonthTbl = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
//     let myYear = y;
//     myDate = new Date(myYear,l);

//     //---------閏年対応---------------
//     ((myYear%4)===0 && (myYear%100)!==0) || (myYear%400)===0 ? myMonthTbl[1]=29: 28;

//     let myMonth = myDate.getMonth();
//     myDate.setDate(1);

//     //------------取得したWeekの数字がマイナスにならないようにする
//     function getWeek(n){
//         n-=1;
//         if(n<0){
//             n=6;
//             return n;
//         }else{
//             return n;
//         }
//     };
//     let myWeek = getWeek(myDate.getDay());
//     //-------------1週間の列の数をだす----------------
//     let myTblLine = Math.ceil((myWeek+myMonthTbl[myMonth])/7);
//     //----------------1ヶ月の日数を出す------------
//     let myTable = new Array(7*myTblLine);
//     for(let i=0;i<7*myTblLine;i++){
//         myTable[i+myWeek]=i+1;
//         myTable[i]=' ';
//     }
//     for(i=0;i<myMonthTbl[myMonth];i++){
//         myTable[i+myWeek]=i+1;
//     }

//     //------------表を作るにあたってまず内側から作っていく。
//     //-------------上から下に実行されるので、内枠から作っていかないとおかしなことになる。
//     //------------日にち情報の準備-----------------
//     let source = '';
//     let td = '<td>';
//     let tdC = '</td>';
//     let tr = '<tr>';
//     let trC = '</tr>';

//     for(i=0;i<myTblLine;i++){
//         source += tr;
//             for(let j=0;j<7;j++){
//                 let mydat = myTable[j+(i*7)];
//                 if(todayMyMonth === myMonth &&mydat ===myToday){
//                     source += '<td class="today">' + mydat + tdC;
//                 }else if(j === 5){
//                     source += '<td class="sat">' + mydat + tdC;
//                 }else if(j === 6){
//                     source += '<td class="sun">' + mydat + tdC;
//                 }else{
//                     source += td + mydat + tdC;
//                 }
//             }
//         source += trC;
//     };

//     //-------------週の部分の情報を作成-------------
//     let week='';
//     for(let k=0;k<7;k++){
//         if(k === 5){
//             week += '<td class="sat">' + myWeekTbl[k] + tdC;
//         }else if(k === 6){
//             week += '<td class="sun">' + myWeekTbl[k] + tdC;
//         }else{
//             week += td + myWeekTbl[k] + tdC;
//         }
//     }
//     let WeekTr = tr + week + trC;
//     //-------------見出しとテーブルの情報セット-----------
//     let tablesource = '<table>' +
//         '<tr><td colspan="7">' +
//             myYear + '年' + (myMonth+1) + '月' +
//             '</td></tr>' + WeekTr + source + '</table>';

//     //-----------全ての書き出し-------------
//     $calendar.append(tablesource);
    


// }

function create_month(date){
    let month_calendar = '<div id="month_calendar"></div>';
    $("#main").append(month_calendar);
    let month_created = setCalendar(myYear,MyMonth);
    $("#month_calendar").append(month_created);
}

$("body").on('click','.month_back',function(){
    let month_calendar = '<div id="month_calendar"></div>';
    MyMonth--;
    if(MyMonth == -1){
        MyMonth = 11;
        myYear--;
    }
    $("#main").empty();
    $("#main").append(month_calendar);
    setCalendar(myYear,MyMonth);
    let month_created = setCalendar(myYear,MyMonth);
    $("#month_calendar").append(month_created);
});

$('body').on('click','.month_next',function(){
    let month_calendar = '<div id="month_calendar"></div>';
    MyMonth++;
    if(MyMonth ==12 ){
        MyMonth = 0;
        myYear++;
    }
    $("#main").empty();
    $("#main").append(month_calendar);
    setCalendar(myYear,MyMonth);
    let month_created = setCalendar(myYear,MyMonth);
    $("#month_calendar").append(month_created);
});



//---------------------Level:Year----------------
//----------------------------------------------
//----------------------------------------------

function setCalendar(y,l){
    let myDate = new Date();
    let myToday = myDate.getDate();
    let todayMyMonth = myDate.getMonth();
    // let myWeekTbl = new Array('月','火','水','木','金','土','日');
    let myMonthTbl = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    let myYear = y;
    myDate = new Date(myYear,l);

    //---------閏年対応---------------
    ((myYear%4)===0 && (myYear%100)!==0) || (myYear%400)===0 ? myMonthTbl[1]=29: 28;

    let myMonth = myDate.getMonth();
    myDate.setDate(1);

    //------------取得したWeekの数字がマイナスにならないようにする
    // function getWeek(n){
    //     n-=1;
    //     if(n<0){
    //         n=6;
    //         return n;
    //     }else{
    //         return n;
    //     }
    // };
    let myWeek = getWeek(myDate.getDay());
    //-------------1週間の列の数をだす----------------
    let myTblLine = Math.ceil((myWeek+myMonthTbl[myMonth])/7);
    //----------------1ヶ月の日数を出す------------
    let myTable = new Array(7*myTblLine);
    for(let i=0;i<7*myTblLine;i++){
        myTable[i+myWeek]=i+1;
        myTable[i]=' ';
    }
    for(i=0;i<myMonthTbl[myMonth];i++){
        myTable[i+myWeek]=i+1;
    }

    //------------表を作るにあたってまず内側から作っていく。
    //-------------上から下に実行されるので、内枠から作っていかないとおかしなことになる。
    //------------日にち情報の準備-----------------
    let source = '';
    let td = '<td>';
    let tdC = '</td>';
    let tr = '<tr>';
    let trC = '</tr>';

    for(i=0;i<myTblLine;i++){
        source += tr;
            for(let j=0;j<7;j++){
                let mydat = myTable[j+(i*7)];
                if(todayMyMonth === myMonth &&mydat ===myToday){
                    source += '<td class="today">' + mydat + tdC;
                }else if(j === 5){
                    source += '<td class="sat">' + mydat + tdC;
                }else if(j === 6){
                    source += '<td class="sun">' + mydat + tdC;
                }else{
                    source += td + mydat + tdC;
                }
            }
        source += trC;
    };

    //-------------週の部分の情報を作成-------------
    let week='';
    for(let k=0;k<7;k++){
        if(k === 5){
            week += '<td class="sat">' + weekArr[k] + tdC;
        }else if(k === 6){
            week += '<td class="sun">' + weekArr[k] + tdC;
        }else{
            week += td + weekArr[k] + tdC;
        }
    }
    let WeekTr = tr + week + trC;
    //-------------見出しとテーブルの情報セット-----------
    let tablesource = '<table>' +
        '<tr><td colspan="7">' +
            myYear + '年' + (myMonth+1) + '月' +
            '</td></tr>' + WeekTr + source + '</table>';

    //-----------全ての書き出し-------------
    // $calendar.append(tablesource);
    return tablesource;


}
    
function create_year(date){
    let year_calendar = '<div id="year_calendar"></div>';
    $("#main").append(year_calendar);
    let myYear = date.getFullYear();
    let MyMonth = 0;
    for(let j=0;j<3;j++){
        let calendar_row = '';
        calendar_row += `<div id="calendar_row${j}"></div>`    
        $("#year_calendar").append(calendar_row);
        let for_calendar_row = `#calendar_row${j}`
        for(let i=0;i<4;i++){
            let single_month = setCalendar(myYear,MyMonth);
            $(for_calendar_row).append(single_month);
            MyMonth++;
            if(MyMonth ==12 ){
                MyMonth = 0;
                myYear++;
            }else if(MyMonth == -1){
                MyMonth = 12;
                myYear--;
            }
        }
    }
}

$("body").on('click','.year_back',function(){
    nowDate.setFullYear(nowDate.getFullYear()-1)
    $('#main').empty();
    create_year(nowDate);
    console.log("year_backが押されましたよ");
    
});

$('body').on('click','.year_next',function(){
    nowDate.setFullYear(nowDate.getFullYear()+1)
    $('#main').empty();
    create_year(nowDate);
    console.log("year_nextが押されましたよ");
    
});



// function create_year(){
//     let myYear = myDate.getFullYear();
//     let MyMonth = 0;

//     for(let j=0;j<3;j++){
//         let calendar_row = '';
//         calendar_row += `<div id="calendar_row${j}"></div>`    
//         $("#calendar").append(calendar_row);
//         let for_calendar_row = `#calendar_row${j}`
//         for(let i=0;i<4;i++){
//             let single_month = setCalendar(myYear,MyMonth);
//             $(for_calendar_row).append(single_month);
//             MyMonth++;
//             if(MyMonth ==12 ){
//                 MyMonth = 0;
//                 myYear++;
//             }else if(MyMonth == -1){
//                 MyMonth = 12;
//                 myYear--;
//             }
//         }
//     }
// };

//--------------schedule_set-------------------
//---------------------------------------------
//---------------------------------------------
function reset_scheduleBox(){
    $("#title_box").val("");
    let primal_day = '';
    primal_day += myYear+'年'+(('0'+(MyMonth+1)).slice(-2))+('月'+('0'+MyDate).slice(-2))+'日';
    $("#from_date").val(primal_day);
    let primal_hour = '';
    primal_hour += (('0'+MyHour).slice(-2)) + ':'+(('0'+MyMin).slice(-2))
    $("#from_time").val(primal_hour);
    $("#till_time").val("");
    $("#till_date").val("");
    $("#author").val("");
    $("#description").val("");
    $("#category > input").prop('checked',false)
}

function fromDate_array(){
    let from_date = $("#from_date").val()
    from_date = from_date.replace("年","|")
    from_date = from_date.replace("月","|")
    from_date = from_date.replace("日","|")
    from_date = from_date.split('|');
    from_date.pop()
    return from_date;
}

function fromTime_array(){
    let from_time = $("#from_time").val();
    from_time = from_time.replace(":","|");
    from_time = from_time.split("|");
    return from_time;
}

function scheduleFrom(){
    let from_date = fromDate_array();
    let from_time = fromTime_array();
    let scheduleFrom = $.merge(from_date,from_time);
    return scheduleFrom;
}
function tillDate_array(){
    let till_date = $("#till_date").val()
    till_date = till_date.replace("年","|")
    till_date = till_date.replace("月","|")
    till_date = till_date.replace("日","|")
    till_date = till_date.split('|');
    till_date.pop()
    return till_date;
}

function tillTime_array(){
    let till_time = $("#till_time").val();
    till_time = till_time.replace(":","|");
    till_time = till_time.split("|");
    return till_time;
}

function scheduleTill(){
    let till_date = tillDate_array();
    let till_time = tillTime_array();
    let scheduleTill = $.merge(till_date,till_time);
    return scheduleTill;
}

$("#schedule_button").on('click',function(){
    $("#schedule_box").toggleClass("hide");
    $("#mask2").toggleClass("hide");
    reset_scheduleBox();
})

$("#schedule_box_close").on('click',function(){
    $("#schedule_box").toggleClass("hide");
    $("#mask2").toggleClass("hide");
    
})
$("#mask2").on('click',function(){
    $("#schedule_box").toggleClass("hide");
    $("#mask2").toggleClass("hide");
})

//-----------firebaseにデータ送信-------------


$("#save").on('click',function(){
    let scheduleFrom_array = scheduleFrom();
    let scheduleTill_array = scheduleTill();
    newPostRef.push({
        title:$("#title_box").val(),
        schedule_start:scheduleFrom_array,
        schedule_end:scheduleTill_array,
        author:$("#author").val(),
        description:$("#description").val(),
        category:$("#category > input[name='category_chosen']:checked").val()
    })
    reset_scheduleBox();
})

//----------------firebaseのデータ受信--------------
newPostRef.on('child_added',function(data){
    const v = data.val();
    console.log(v);
    
});

//----------------位置情報を取得-----------------
let num1 = 16
let num2 = 00
let str = ""
str += "#main:contains('"+num1 + ":" + num2 + "')"

function ArrayChange(date){
    let year = date.getFullYear()
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let timeArray = [year,month,day,hour,min];
    return timeArray;
}

let testDate = new Date(2019,11-1,31,9,0,40);
// function TestDate(date){
//     let test = date;
//     test = test.setDate(test.getDate()+5);
//     console.log("setDate後のtime"+test);
//     console.log("setDate後のdate"+date);
// }

 
$("#search").on('click',function(){
    // console.log("testDate初期値"+testDate);
    // testDate = testDate.setDate(testDate.getDate()+1);
    // console.log("翌月頭"+testDate);
    // testDate = testDate.setDate(testDate.getDate()-1);
    // console.log("当月末"+testDate);
    
    
    // let test1 = testDate.toLocaleString();
    // console.log("toLocaleStringの結果"+test1);
    let test2 = testDate.toDateString();
    console.log("toDateStringの結果"+test2);
    // let test3 = testDate.toTimeString();
    // console.log("toTimeStringの結果"+test3);
    // let test4 = testDate.toString();
    // console.log("toStringの結果"+test4);
    // test3 = test3.replace(":","|");
    // test3 = test3.replace(":","|");
    // console.log(test3);
    // test3 = test3.split("|");
    // console.log(test3);
    // test3.pop();
    // console.log(test3);
    // testDate = testDate.setDate(testDate.getDate()+5)
    // console.log();
    // testDate = new Date(test1);
    // console.log(testDate);
})

// $("#search").on('click',function(){
//     let test1 = testDate.toLocaleString();
//     console.log("toLocaleStringの結果"+test1);
//     test1 = test1.replace("/","/","|","|");
//     console.log("スラッシュ無くなる"+test1);
//     test1 = test1.replace(" ","|");
//     console.log("空白無くなる"+test1);
//     test1 = test1.replace(":","|");
//     console.log("コロン無くなる"+test1);
//     test1 = test1.split("|");
//     console.log("配列へ変換"+test1);
// })

// function tillDate_array(){
//     let till_date = $("#till_date").val()
//     till_date = till_date.replace("年","|")
//     till_date = till_date.replace("月","|")
//     till_date = till_date.replace("日","|")
//     till_date = till_date.split('|');
//     till_date.pop()
//     return till_date;
// }   

// $("#search").on('click',function(){
//     let timeArray = ArrayChange(nowDate);
//     console.log(timeArray);
//     $("#today").data('time',timeArray);
//     console.log($("#today").data('time'));
// })


// $("#search").on('click',function(){
//     let test = $(str).position();
//     console.log(test);
//     console.log(test.top);
//     console.log(test.left);
// })

