(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompGuide04");
            this.set_titletext("tab");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,1230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_00","20","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","50","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","85",null,"1125","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","460","10","250","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("※ Add Tabpage → prevbutton, nextbutton");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","50","397","127",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab00);
            obj.set_text("Tabpage1");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab00);
            obj.set_text("Tabpage2");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Tab("Tab01","460","50","397","127",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab01);
            obj.set_text("Tabpage1");
            this.Div00.form.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab01);
            obj.set_text("Tabpage2");
            this.Div00.form.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div00.form.Tab01);
            obj.set_text("Tabpage3");
            this.Div00.form.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div00.form.Tab01);
            obj.set_text("Tabpage4");
            this.Div00.form.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Div00.form.Tab01);
            obj.set_text("Tabpage5");
            this.Div00.form.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.Div00.form.Tab01);
            obj.set_text("Tabpage6");
            this.Div00.form.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.Div00.form.Tab01);
            obj.set_text("Tabpage7");
            this.Div00.form.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.Div00.form.Tab01);
            obj.set_text("Tabpage8");
            this.Div00.form.Tab01.addChild(obj.name, obj);

            obj = new Static("Static03","460","197","385","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("※ Change Text");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("Tab02","34","235","387","127",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_multiline("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab02);
            obj.set_text("Tabpage1");
            this.Div00.form.Tab02.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab02);
            obj.set_text("Tabpage2");
            this.Div00.form.Tab02.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div00.form.Tab02);
            obj.set_text("Tabpage3");
            this.Div00.form.Tab02.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div00.form.Tab02);
            obj.set_text("Tabpage4");
            this.Div00.form.Tab02.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Div00.form.Tab02);
            obj.set_text("Tabpage5");
            this.Div00.form.Tab02.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.Div00.form.Tab02);
            obj.set_text("Tabpage6");
            this.Div00.form.Tab02.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.Div00.form.Tab02);
            obj.set_text("Tabpage7");
            this.Div00.form.Tab02.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.Div00.form.Tab02);
            obj.set_text("Tabpage8");
            this.Div00.form.Tab02.addChild(obj.name, obj);

            obj = new Static("Static04","34","382","195","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("※ tabjustify = true");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("Tab04","37","420","917","127",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_tabindex("0");
            obj.set_tabjustify("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab04);
            obj.set_text("Education");
            this.Div00.form.Tab04.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab04);
            obj.set_text("Nexacro N");
            this.Div00.form.Tab04.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div00.form.Tab04);
            obj.set_text("Design");
            this.Div00.form.Tab04.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div00.form.Tab04);
            obj.set_text("TOBESOFT");
            this.Div00.form.Tab04.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Div00.form.Tab04);
            obj.set_text("Publishing");
            this.Div00.form.Tab04.addChild(obj.name, obj);

            obj = new Static("Static05","34","Tab04:20","628","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("※ tabbuttonwidth = 120px, tabbuttonheight = 32px , selectedtabbuttonheight = 34px");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("Tab05","37","Static05:10","917","127",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_tabbuttonwidth("120");
            obj.set_tabbuttonheight("32");
            obj.set_selectedtabbuttonheight("34");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab05);
            obj.set_text("Education");
            this.Div00.form.Tab05.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab05);
            obj.set_text("Nexacro N");
            this.Div00.form.Tab05.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div00.form.Tab05);
            obj.set_text("Design");
            this.Div00.form.Tab05.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div00.form.Tab05);
            obj.set_text("TOBESOFT");
            this.Div00.form.Tab05.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Div00.form.Tab05);
            obj.set_text("Publishing");
            this.Div00.form.Tab05.addChild(obj.name, obj);

            obj = new Static("Static06","34","Tab05:20","603","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("※ showtabbuttonicon = true, showtabbuttonicon = true, tabbuttoniconsize = 30px");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("Tab06","37","Static06:10","917","127",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_showtabbuttonicon("true");
            obj.set_tabbuttoniconsize("30");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab06);
            obj.set_text("Education");
            this.Div00.form.Tab06.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab06);
            obj.set_text("Nexacro N");
            this.Div00.form.Tab06.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div00.form.Tab06);
            obj.set_text("Design");
            this.Div00.form.Tab06.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div00.form.Tab06);
            obj.set_text("TOBESOFT");
            this.Div00.form.Tab06.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Div00.form.Tab06);
            obj.set_text("Publishing");
            this.Div00.form.Tab06.addChild(obj.name, obj);

            obj = new Static("Static07","34","Tab06:20","565","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("※ tabbuttongap = 2px");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","34","197","195","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("※ multiline = true");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("Tab03","459","238","495","127",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_tabindex("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab03);
            obj.set_text("Education");
            this.Div00.form.Tab03.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab03);
            obj.set_text("Nexacro N");
            this.Div00.form.Tab03.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div00.form.Tab03);
            obj.set_text("Design");
            this.Div00.form.Tab03.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div00.form.Tab03);
            obj.set_text("TOBESOFT");
            this.Div00.form.Tab03.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Div00.form.Tab03);
            obj.set_text("Publishing");
            this.Div00.form.Tab03.addChild(obj.name, obj);

            obj = new Tab("Tab07","37","Static07:10","917","127",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab07);
            obj.set_text("Education");
            this.Div00.form.Tab07.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab07);
            obj.set_text("Nexacro N");
            this.Div00.form.Tab07.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div00.form.Tab07);
            obj.set_text("Design");
            this.Div00.form.Tab07.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div00.form.Tab07);
            obj.set_text("TOBESOFT");
            this.Div00.form.Tab07.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Div00.form.Tab07);
            obj.set_text("Publishing");
            this.Div00.form.Tab07.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Tab00.Tabpage1
            obj = new Layout("default","",0,0,this.Div00.form.Tab00.Tabpage1.form,function(p){});
            this.Div00.form.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Div00.form.Tab00.Tabpage2.form,function(p){});
            this.Div00.form.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab01.Tabpage1
            obj = new Layout("default","",0,0,this.Div00.form.Tab01.Tabpage1.form,function(p){});
            this.Div00.form.Tab01.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab01.Tabpage2
            obj = new Layout("default","",0,0,this.Div00.form.Tab01.Tabpage2.form,function(p){});
            this.Div00.form.Tab01.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab01.Tabpage3.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab01.Tabpage3.form,function(p){});
            this.Div00.form.Tab01.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab01.Tabpage4.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab01.Tabpage4.form,function(p){});
            this.Div00.form.Tab01.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab01.Tabpage5.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab01.Tabpage5.form,function(p){});
            this.Div00.form.Tab01.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab01.Tabpage6.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab01.Tabpage6.form,function(p){});
            this.Div00.form.Tab01.Tabpage6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab01.Tabpage7.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab01.Tabpage7.form,function(p){});
            this.Div00.form.Tab01.Tabpage7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab01.Tabpage8.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab01.Tabpage8.form,function(p){});
            this.Div00.form.Tab01.Tabpage8.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab02.Tabpage1
            obj = new Layout("default","",0,0,this.Div00.form.Tab02.Tabpage1.form,function(p){});
            this.Div00.form.Tab02.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab02.Tabpage2
            obj = new Layout("default","",0,0,this.Div00.form.Tab02.Tabpage2.form,function(p){});
            this.Div00.form.Tab02.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab02.Tabpage3.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab02.Tabpage3.form,function(p){});
            this.Div00.form.Tab02.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab02.Tabpage4.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab02.Tabpage4.form,function(p){});
            this.Div00.form.Tab02.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab02.Tabpage5.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab02.Tabpage5.form,function(p){});
            this.Div00.form.Tab02.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab02.Tabpage6.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab02.Tabpage6.form,function(p){});
            this.Div00.form.Tab02.Tabpage6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab02.Tabpage7.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab02.Tabpage7.form,function(p){});
            this.Div00.form.Tab02.Tabpage7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab02.Tabpage8.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab02.Tabpage8.form,function(p){});
            this.Div00.form.Tab02.Tabpage8.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab04.Tabpage1
            obj = new Layout("default","",0,0,this.Div00.form.Tab04.Tabpage1.form,function(p){});
            this.Div00.form.Tab04.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab04.Tabpage2
            obj = new Layout("default","",0,0,this.Div00.form.Tab04.Tabpage2.form,function(p){});
            this.Div00.form.Tab04.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab04.Tabpage3.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab04.Tabpage3.form,function(p){});
            this.Div00.form.Tab04.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab04.Tabpage4.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab04.Tabpage4.form,function(p){});
            this.Div00.form.Tab04.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab04.Tabpage5.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab04.Tabpage5.form,function(p){});
            this.Div00.form.Tab04.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab05.Tabpage1
            obj = new Layout("default","",0,0,this.Div00.form.Tab05.Tabpage1.form,function(p){});
            this.Div00.form.Tab05.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab05.Tabpage2
            obj = new Layout("default","",0,0,this.Div00.form.Tab05.Tabpage2.form,function(p){});
            this.Div00.form.Tab05.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab05.Tabpage3.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab05.Tabpage3.form,function(p){});
            this.Div00.form.Tab05.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab05.Tabpage4.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab05.Tabpage4.form,function(p){});
            this.Div00.form.Tab05.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab05.Tabpage5.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab05.Tabpage5.form,function(p){});
            this.Div00.form.Tab05.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab06.Tabpage1
            obj = new Layout("default","",0,0,this.Div00.form.Tab06.Tabpage1.form,function(p){});
            this.Div00.form.Tab06.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab06.Tabpage2
            obj = new Layout("default","",0,0,this.Div00.form.Tab06.Tabpage2.form,function(p){});
            this.Div00.form.Tab06.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab06.Tabpage3.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab06.Tabpage3.form,function(p){});
            this.Div00.form.Tab06.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab06.Tabpage4.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab06.Tabpage4.form,function(p){});
            this.Div00.form.Tab06.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab06.Tabpage5.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab06.Tabpage5.form,function(p){});
            this.Div00.form.Tab06.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab03.Tabpage1
            obj = new Layout("default","",0,0,this.Div00.form.Tab03.Tabpage1.form,function(p){});
            this.Div00.form.Tab03.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab03.Tabpage2
            obj = new Layout("default","",0,0,this.Div00.form.Tab03.Tabpage2.form,function(p){});
            this.Div00.form.Tab03.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab03.Tabpage3.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab03.Tabpage3.form,function(p){});
            this.Div00.form.Tab03.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab03.Tabpage4.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab03.Tabpage4.form,function(p){});
            this.Div00.form.Tab03.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab03.Tabpage5.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab03.Tabpage5.form,function(p){});
            this.Div00.form.Tab03.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab07.Tabpage1
            obj = new Layout("default","",0,0,this.Div00.form.Tab07.Tabpage1.form,function(p){});
            this.Div00.form.Tab07.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab07.Tabpage2
            obj = new Layout("default","",0,0,this.Div00.form.Tab07.Tabpage2.form,function(p){});
            this.Div00.form.Tab07.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab07.Tabpage3.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab07.Tabpage3.form,function(p){});
            this.Div00.form.Tab07.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab07.Tabpage4.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab07.Tabpage4.form,function(p){});
            this.Div00.form.Tab07.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Tab07.Tabpage5.form
            obj = new Layout("default","",0,0,this.Div00.form.Tab07.Tabpage5.form,function(p){});
            this.Div00.form.Tab07.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,1230,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CompGuide04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
