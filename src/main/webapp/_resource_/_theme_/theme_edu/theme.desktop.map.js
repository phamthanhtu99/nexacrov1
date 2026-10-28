(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #00103f")
            					}
            				}
            			},
            			"Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("13px \"Segoe UI\", \"Malgun Gothic\"")
            					},
            					"contents" :
            					{
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\"")
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TITLE_Close.png')")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TITLE_CloseP.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TITLE_CloseD.png')")
            							}
            						}
            					},
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            								"padding" : nexacro.PaddingObject("8px")
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            								"padding" : nexacro.PaddingObject("8px")
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            								"padding" : nexacro.PaddingObject("8px")
            							},
            							"mouseover" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TITLE_Max.png')")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TITLE_MaxP.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TITLE_MaxD.png')")
            							}
            						}
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TITLE_Min.png')")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TITLE_MinP.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TITLE_MinD.png')")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TITLE_Normal.png')")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TITLE_NormalP.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TITLE_NormalD.png')")
            							}
            						}
            					}
            				}
            			},
            			"titleicon" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/titlebar_icon.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							}
            						}
            					}
            				}
            			},
            			"StatusBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c2c2c2"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            						"color" : nexacro.ColorObject("#1b292b"),
            						"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\"")
            					}
            				}
            			},
            			"resizegrip" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/icon_SB_Grip.png')")
            							}
            						}
            					}
            				}
            			},
            			"progressbar" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							}
            						}
            					}
            				}
            			},
            			"Static" :
            			{
            				"class" :
            				[
            					{
            						"sta_WF_GTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b4b9c6"),
            									"color" : nexacro.ColorObject("#3e4044"),
            									"font" : nexacro.FontObject("600 12px \"Segoe UI\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b4b9c6"),
            									"color" : nexacro.ColorObject("#3e4044"),
            									"font" : nexacro.FontObject("12px \"Segoe UI\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b4b9c6")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GStatus" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#3e4044"),
            									"font" : nexacro.FontObject("13px \"Consolas\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GSize" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("600 12px \"Segoe UI\", \"Malgun Gothic\""),
            									"wordWrap" : "char"
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLineV" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineV.png') 5px 2px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLineH" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineH.png') 5px 2px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ff000c"),
            									"font" : nexacro.FontObject("13px \"Consolas\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GDes" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#006c83"),
            									"font" : nexacro.FontObject("bold 13px/21px \"Segoe UI\",\"Malgun Gothic\""),
            									"wordWrap" : "char"
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #e3e4e9,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_Tobe" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #e3e4e9,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_PushCount" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("11px \"Segoe UI\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_NexacroN" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #e3e4e9,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_Welcome" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            									"color" : nexacro.ColorObject("#222222")
            								}
            							}
            						}
            					},
            					{
            						"sta_LF_MnuTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#b5bdd8"),
            									"font" : nexacro.FontObject("11px \"Segoe UI\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_MainTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("700 38px \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#07152F")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_MainDes" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 18px/26px  \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#7e7e7e"),
            									"wordWrap" : "char",
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_MainTitleSub" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_KeyClient" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#4d4f5c"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 45px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_KeyClientTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#17a2b8"),
            									"font" : nexacro.FontObject("700 38px \"Segoe UI\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_BuildRef" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#4d4f5c"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 45px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_BuildRefTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#28a745"),
            									"font" : nexacro.FontObject("700 38px \"Segoe UI\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Share" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#4d4f5c"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 45px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ShareTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#007bff"),
            									"font" : nexacro.FontObject("700 38px \"Segoe UI\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_NexaAssist" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 13px/19px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("70px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#4d4f5c")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Intro" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("16px \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#808080")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_Body" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3230bf")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Title1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 18px  \"Segoe UI\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Title2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 15px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("6px 10px 7px 13px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Title3" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("5px 10px 5px 0px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Title4" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            									"padding" : nexacro.PaddingObject("5px 10px 5px 0px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Label" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 20px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"color" : nexacro.ColorObject("#222222")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_CompLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 25px"),
            									"color" : nexacro.ColorObject("#222222")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_SubTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_SchLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            									"padding" : nexacro.PaddingObject("0px 10px 0px 40px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Contents" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\""),
            									"wordWrap" : "english",
            									"color" : nexacro.ColorObject("#616161")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_MonthBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #918bb9")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Cal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					}
            				],
            				"self" :
            				{
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac"),
            						"padding" : nexacro.PaddingObject("0px 6px 2px 6px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#acacac")
            					}
            				},
            				"class" :
            				[
            					{
            						"edt_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c15e3b")
            								}
            							}
            						}
            					},
            					{
            						"edt_LF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Segoe UI\", \"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Segoe UI\", \"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Segoe UI\", \"Malgun Gothic\"")
            								},
            								"nulltext" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 30px 0px 8px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Segoe UI\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac"),
            						"padding" : nexacro.PaddingObject("0px 6px 2px 6px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#acacac")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#b71d26")
            					}
            				},
            				"class" :
            				[
            					{
            						"msk_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c15e3b")
            								}
            							}
            						}
            					}
            				]
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac"),
            						"wordWrap" : "char",
            						"padding" : nexacro.PaddingObject("4px 6px"),
            						"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					},
            					"readonly" :
            					{
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#acacac")
            					}
            				},
            				"class" :
            				[
            					{
            						"txt_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c15e3b")
            								}
            							}
            						}
            					},
            					{
            						"txt_POP_Message" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("20px 20px 0px 80px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("20px 20px 0px 80px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("20px 20px 0px 80px")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("20px 20px 0px 80px")
            								}
            							}
            						}
            					},
            					{
            						"txt_WF_Desc" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("6px 10px"),
            									"wordWrap" : "none",
            									"border" : nexacro.BorderObject("1px solid #dedede"),
            									"color" : nexacro.ColorObject("#000000"),
            									"letterSpacing" : nexacro.CSSValueObject("0px")
            								},
            								"disabled" :
            								{
            									"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("6px 10px"),
            									"wordWrap" : "none",
            									"border" : nexacro.BorderObject("1px solid #dedede"),
            									"color" : nexacro.ColorObject("#000000"),
            									"letterSpacing" : nexacro.CSSValueObject("0px")
            								},
            								"mouseover" :
            								{
            									"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("6px 10px"),
            									"wordWrap" : "none",
            									"border" : nexacro.BorderObject("1px solid #dedede"),
            									"color" : nexacro.ColorObject("#000000"),
            									"letterSpacing" : nexacro.CSSValueObject("0px")
            								},
            								"focused" :
            								{
            									"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("6px 10px"),
            									"wordWrap" : "none",
            									"border" : nexacro.BorderObject("1px solid #dedede"),
            									"color" : nexacro.ColorObject("#000000"),
            									"letterSpacing" : nexacro.CSSValueObject("0px")
            								},
            								"readonly" :
            								{
            									"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("6px 10px"),
            									"wordWrap" : "none",
            									"border" : nexacro.BorderObject("1px solid #dedede"),
            									"color" : nexacro.ColorObject("#000000"),
            									"letterSpacing" : nexacro.CSSValueObject("0px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("6px 8px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#2f59bf")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					},
            					"ListBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("6px 8px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#2f59bf")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					},
            					"readonly" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"cbo_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c15e3b")
            								}
            							}
            						}
            					}
            				]
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("#acacac")
            							},
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"MultiCombo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					},
            					"readonly" :
            					{
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf")
            					}
            				}
            			},
            			"multicombolist" :
            			{
            				"parent" :
            				{
            					"MultiCombo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							}
            						}
            					},
            					"cellmulticombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #acacac")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #acacac")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"multicomboedit" :
            			{
            				"parent" :
            				{
            					"multicombolist" :
            					{
            						"parent" :
            						{
            							"MultiCombo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none,0px none,1px solid #acacac"),
            										"padding" : nexacro.PaddingObject("8px")
            									}
            								}
            							},
            							"cellmulticombo" :
            							{
            								"parent" :
            								{
            									"GridCellControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none,0px none,1px solid #acacac"),
            												"padding" : nexacro.PaddingObject("8px")
            											}
            										}
            									},
            									"ListViewCellControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none,0px none,1px solid #acacac"),
            												"padding" : nexacro.PaddingObject("8px")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					},
            					"readonly" :
            					{
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#b71d26")
            					}
            				},
            				"class" :
            				[
            					{
            						"cal_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c15e3b")
            								}
            							}
            						}
            					},
            					{
            						"cal_WF_Month" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"nulltext" :
            							{
            								"color" : nexacro.ColorObject("#acacac")
            							},
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					}
            				}
            			},
            			"monthstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									}
            								}
            							},
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"color" : nexacro.ColorObject("#222222"),
            														"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"color" : nexacro.ColorObject("#222222"),
            														"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"color" : nexacro.ColorObject("#222222"),
            														"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"yearstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									}
            								}
            							},
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"color" : nexacro.ColorObject("#222222"),
            														"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"color" : nexacro.ColorObject("#222222"),
            														"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"color" : nexacro.ColorObject("#222222"),
            														"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#e33645")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#0f62d6")
            									}
            								}
            							},
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"saturday" :
            													{
            														"color" : nexacro.ColorObject("#0f62d6")
            													},
            													"sunday" :
            													{
            														"color" : nexacro.ColorObject("#e33645")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"saturday" :
            													{
            														"color" : nexacro.ColorObject("#0f62d6")
            													},
            													"sunday" :
            													{
            														"color" : nexacro.ColorObject("#e33645")
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"saturday" :
            													{
            														"color" : nexacro.ColorObject("#0f62d6")
            													},
            													"sunday" :
            													{
            														"color" : nexacro.ColorObject("#e33645")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#0f62d6")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#e33645")
            									},
            									"today" :
            									{
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#a9a9a9")
            									}
            								}
            							},
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"mouseover" :
            													{
            													},
            													"saturday" :
            													{
            														"color" : nexacro.ColorObject("#0f62d6")
            													},
            													"selected" :
            													{
            														"color" : nexacro.ColorObject("#ffffff")
            													},
            													"sunday" :
            													{
            														"color" : nexacro.ColorObject("#e33645")
            													},
            													"today" :
            													{
            														"color" : nexacro.ColorObject("#ffffff")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"mouseover" :
            													{
            													},
            													"saturday" :
            													{
            														"color" : nexacro.ColorObject("#0f62d6")
            													},
            													"selected" :
            													{
            														"color" : nexacro.ColorObject("#ffffff")
            													},
            													"sunday" :
            													{
            														"color" : nexacro.ColorObject("#e33645")
            													},
            													"today" :
            													{
            														"color" : nexacro.ColorObject("#ffffff")
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"mouseover" :
            													{
            													},
            													"saturday" :
            													{
            														"color" : nexacro.ColorObject("#0f62d6")
            													},
            													"selected" :
            													{
            														"color" : nexacro.ColorObject("#ffffff")
            													},
            													"sunday" :
            													{
            														"color" : nexacro.ColorObject("#e33645")
            													},
            													"today" :
            													{
            														"color" : nexacro.ColorObject("#ffffff")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"yearitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 5px")
            					}
            				}
            			},
            			"stepitem" :
            			{
            				"parent" :
            				{
            					"StepControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/stp_WF_Item.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/stp_WF_ItemS.png')")
            							}
            						}
            					}
            				}
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #364f60"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #364f60")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #364f60")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #364f60"),
            										"padding" : nexacro.PaddingObject("8px"),
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #364f60")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #364f60")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #acacac")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            										"color" : nexacro.ColorObject("#a9a9a9")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				},
            				"class" :
            				[
            					{
            						"img_WF_Noborder" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6")
            							}
            						}
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 8px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 8px"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					}
            				}
            			},
            			"Menu" :
            			{
            				"self" :
            				{
            					"disabled" :
            					{
            					}
            				}
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ccdaff"),
            								"padding" : nexacro.PaddingObject("0px 15px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#a9a9a9")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						},
            						"class" :
            						[
            							{
            								"mnu_TF_Menu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"color" : nexacro.ColorObject("#222222"),
            											"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\""),
            											"padding" : nexacro.PaddingObject("0px 20px")
            										},
            										"mouseover" :
            										{
            											"color" : nexacro.ColorObject("#ffc601")
            										},
            										"selected" :
            										{
            											"color" : nexacro.ColorObject("#ffc601")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemcheckbox" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/mnu_WF_ChkIcon.png')")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/mnu_WF_ChkIcon.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/mnu_WF_Expand.png')")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/mnu_WF_Expand.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemhotkeytext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("11px \"Segoe UI\", \"Malgun Gothic\""),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("11px \"Segoe UI\", \"Malgun Gothic\""),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac,0px none,0px none,0px none"),
            						"padding" : nexacro.PaddingObject("1px 0px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6, 0px none,0px none,0px none")
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDec.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDecM.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDecM.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDecD.png')")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDec.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDecM.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDecM.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDecD.png')")
            							}
            						}
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HInc.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HIncM.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HIncM.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HIncD.png')")
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VInc.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VIncM.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VIncM.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VIncD.png')")
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"class" :
            								[
            									{
            										"grd_LF_Detail" :
            										{
            											"self" :
            											{
            												"mouseover" :
            												{
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #acacac"),
            						"padding" : nexacro.PaddingObject("0px 1px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #e6e6e6")
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac"),
            						"padding" : nexacro.PaddingObject("0px 12px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #858ba3"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #858ba3"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("1px solid #4b4f5e"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #4b4f5e"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_LOGIN_Login" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #483d8b"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #483d8b"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #483d8b"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #483d8b"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Home" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d6dee3"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Home.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d6dee3"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Home.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d6dee3"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Home.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d6dee3"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Home.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Max" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Max.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Max.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Max.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Max.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Min" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Min.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Min.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Min.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Min.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Open" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Open.png')"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e3e4e9, 1px solid #e3e4e9, 1px solid #e3e4e9"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Open.png')"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e3e4e9, 1px solid #e3e4e9, 1px solid #e3e4e9"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Open.png')"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e3e4e9, 1px solid #e3e4e9, 1px solid #e3e4e9"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Open.png')"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e3e4e9, 1px solid #e3e4e9, 1px solid #e3e4e9"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Open.png')"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e3e4e9, 1px solid #e3e4e9, 1px solid #e3e4e9"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Verti" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Verti.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Verti.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Verti.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Verti.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Close.png')"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e3e4e9, 1px solid #e3e4e9, 1px solid #e3e4e9"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Close.png')"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e3e4e9, 1px solid #e3e4e9, 1px solid #e3e4e9"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Close.png')"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e3e4e9, 1px solid #e3e4e9, 1px solid #e3e4e9"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Close.png')"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e3e4e9, 1px solid #e3e4e9, 1px solid #e3e4e9"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Close.png')"),
            									"border" : nexacro.BorderObject("0px none, 1px solid #e3e4e9, 1px solid #e3e4e9, 1px solid #e3e4e9"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Collapse" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Expand" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Horz" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Horz.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Horz.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Horz.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_Horz.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_AllX" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_AllX.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_AllX.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_AllX.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_MDI_AllX.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_LogoIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Logo.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Logo.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Logo.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Logo.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Logo.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Logout" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #acacac"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #acacac"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #acacac"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #acacac"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#71797c"),
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 6px 3px 6px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#71797c"),
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 6px 3px 6px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#71797c"),
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 6px 3px 6px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#71797c"),
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 6px 3px 6px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#71797c"),
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 6px 3px 6px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,3px solid #17a2b8"),
            									"color" : nexacro.ColorObject("#212529"),
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 6px")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Prev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Next" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_PushN" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Mnu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Mnu.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Mnu.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Mnu.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Mnu.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Home" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Home.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Home.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Home.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Home.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Bookmark" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Bookmark.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Bookmark.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Bookmark.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Bookmark.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Search.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Search.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Search.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Search.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Setting" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Setting.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Setting.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Setting.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Setting.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Find" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Find.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Find.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Find.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Find.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Find.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Change" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Change.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Change.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Change.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Change.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_LF_Change.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Pin" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Pin.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Pin.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Pin.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Pin.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_Pin.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Logout" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Logout.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Logout.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Logout.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Logout.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Quick" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3adcf"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("600 12px \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#a3adcf")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3ad4f"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("600 12px \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#a3ad4f")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3ad4f"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("600 12px \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#a3ad4f")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3ad4f"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("600 12px \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#dade20")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3ad4f"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("600 12px \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#dade20")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Paging" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("600 15px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("600 15px  \"Segoe UI\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#17a2b8"),
            									"font" : nexacro.FontObject("600 15px  \"Segoe UI\", \"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#17a2b8"),
            									"font" : nexacro.FontObject("600 15px  \"Segoe UI\", \"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#17a2b8"),
            									"font" : nexacro.FontObject("600 15px  \"Segoe UI\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PagingNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PagingPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PagingDNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PagingDPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Play" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("18px \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#a4b0af"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Play.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("18px \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#a4b0af"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Play.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("18px \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#a4b0af"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Play.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("18px \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#a4b0af"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Play.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Guide" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#777777"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Guide.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#777777"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Guide.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#777777"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Guide.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#777777"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Guide.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Support" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#777777"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Support.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#777777"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Support.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#777777"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Support.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\""),
            									"color" : nexacro.ColorObject("#777777"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Support.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 30px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Add" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Add.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Add.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Add.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Add.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Add.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Delete" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Delete.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Delete.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Delete.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Delete.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Delete.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Exec" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ExecIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#003d9f"),
            									"padding" : nexacro.PaddingObject("5px 5px 6px 0px"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ExecIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#003d9f"),
            									"padding" : nexacro.PaddingObject("5px 5px 6px 0px"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ExecIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#003d9f"),
            									"padding" : nexacro.PaddingObject("5px 5px 6px 0px"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ExecIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#003d9f"),
            									"padding" : nexacro.PaddingObject("5px 5px 6px 0px"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ExecIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
            									"color" : nexacro.ColorObject("#003d9f"),
            									"padding" : nexacro.PaddingObject("5px 5px 6px 0px"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_POP_Close.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_POP_Close.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_POP_Close.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_POP_Close.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_POP_Close.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_POP_Close.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CRUD" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #2f59bf"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #2f59bf"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1a326d"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1a326d"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Find" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Find.png')"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Find.png')"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Find.png')"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Find.png')"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleLM.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleLM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleLM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleLD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleR" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleRM.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleRM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleRM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleRD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleT" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleTM.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleTM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleTM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleTD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ShuttleB" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleBM.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleBM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_SuttleBM.png\")")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_suttleBD.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Status" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #51ba97"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #51ba97"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff930f"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dc3545"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #007bff"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PlayIcon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PlayIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"color" : nexacro.ColorObject("#003d9f"),
            									"padding" : nexacro.PaddingObject("5px 0px 6px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PlayIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"color" : nexacro.ColorObject("#003d9f"),
            									"padding" : nexacro.PaddingObject("5px 0px 6px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PlayIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"color" : nexacro.ColorObject("#003d9f"),
            									"padding" : nexacro.PaddingObject("5px 0px 6px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PlayIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"color" : nexacro.ColorObject("#003d9f"),
            									"padding" : nexacro.PaddingObject("5px 0px 6px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PlayIcon.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            									"color" : nexacro.ColorObject("#003d9f"),
            									"padding" : nexacro.PaddingObject("5px 0px 6px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_LineBlue" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #007bff"),
            									"color" : nexacro.ColorObject("#007bff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #007bff"),
            									"color" : nexacro.ColorObject("#007bff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #007bff"),
            									"color" : nexacro.ColorObject("#007bff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cfe6ff"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cfe6ff"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_LineGray" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #6c757d"),
            									"color" : nexacro.ColorObject("#6c757d"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #6c757d"),
            									"color" : nexacro.ColorObject("#6c757d")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #6c757d"),
            									"color" : nexacro.ColorObject("#6c757d")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e3e5e7"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e3e5e7"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_LineYellow" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffbf05"),
            									"color" : nexacro.ColorObject("#ffbf05"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffbf05"),
            									"color" : nexacro.ColorObject("#ffbf05")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffbf05"),
            									"color" : nexacro.ColorObject("#ffbf05")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #fffaeb"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #fffaeb"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_LineGreen" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #28a745"),
            									"color" : nexacro.ColorObject("#28a745"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #28a745"),
            									"color" : nexacro.ColorObject("#28a745")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #28a745"),
            									"color" : nexacro.ColorObject("#28a745")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d7eedc"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d7eedc"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_LineTeal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"color" : nexacro.ColorObject("#17a2b8"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"color" : nexacro.ColorObject("#17a2b8")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"color" : nexacro.ColorObject("#17a2b8")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3edf2"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3edf2"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_LineRed" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dc3545"),
            									"color" : nexacro.ColorObject("#dc3545"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dc3545"),
            									"color" : nexacro.ColorObject("#dc3545")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dc3545"),
            									"color" : nexacro.ColorObject("#dc3545")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f8d9dc"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f8d9dc"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FillBlue" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #007bff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #007bff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0069d9"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0069d9"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0069d9"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #58aaff"),
            									"color" : nexacro.ColorObject("#b8d1ff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FillBlueSub" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1d9cff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 12px \"Segoe UI\", \"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1d9cff"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 12px \"Segoe UI\", \"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1883d6"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1883d6"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1883d6"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1883d6"),
            									"color" : nexacro.ColorObject("#b8d1ff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FillGray" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #6c757d"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #6c757d"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #5a6268"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #5a6268"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #5a6268"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b0b6ba"),
            									"color" : nexacro.ColorObject("#cccfd1")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FillYellow" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffbf05"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffbf05"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffa105"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffa105"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffa105"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffd75e"),
            									"color" : nexacro.ColorObject("#fff2b9")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FillGreen" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #28a745"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #28a745"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #218838"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #218838"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #218838"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #74c686"),
            									"color" : nexacro.ColorObject("#b6dbbc")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FillTeal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #17a2b8"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #138496"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #138496"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #138496"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #67c3d0"),
            									"color" : nexacro.ColorObject("#b3d9e2")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FillRed" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dc3545"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dc3545"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c82333"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c82333"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c82333"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e97b86"),
            									"color" : nexacro.ColorObject("#f0b9bc")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_BaseL" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseL.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseL.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseL.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseL.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseL.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseL.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_BaseR" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseR.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseR.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseR.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseR.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseR.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseR.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_BaseT" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseT.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseT.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseT.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseT.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseT.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseT.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_BaseB" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseB.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseB.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseB.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseB.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseB.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_BaseB.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_BookMark" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BookMark.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BookMark.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BookMark.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BookMark.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BookMark.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_BookMarkS" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BookMarkS.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BookMarkS.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BookMarkS.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BookMarkS.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_BookMarkS.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalMonthNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalMonthPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CalMonth" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c2c2c5"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #808186"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #808186"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #808186"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #808186"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_RShuttle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDNext.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_LShuttle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagingDPrev.png')")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					}
            				]
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					},
            					"readonly" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"spn_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c15e3b")
            								}
            							}
            						}
            					}
            				]
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_Dnbtn.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DnbtnM.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DnbtnD.png')")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpndnBtn.png')"),
            												"padding" : nexacro.PaddingObject("0px 0px 4px 0px")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpndnBtnP.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpndnBtnP.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpndnBtnD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpndnBtn.png')"),
            												"padding" : nexacro.PaddingObject("0px 0px 4px 0px")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpndnBtnP.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpndnBtnP.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpndnBtnD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_Upbtn.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpbtnM.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpbtnD.png')")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnupBtn.png')"),
            												"padding" : nexacro.PaddingObject("4px 0px 0px 0px")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnupBtnP.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnupBtnP.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnupBtnD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnupBtn.png')"),
            												"padding" : nexacro.PaddingObject("4px 0px 0px 0px")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnupBtnP.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnupBtnP.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnupBtnD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 8px")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("12px \"Segoe UI\", \"Malgun Gothic\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("12px \"Segoe UI\", \"Malgun Gothic\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Icon.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 8px")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_IconD.png')"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_IconM.png')")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_IconS.png')")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_IconMS.png')")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_IconDS.png')"),
            						"color" : nexacro.ColorObject("#a9a9a9")
            					}
            				},
            				"class" :
            				[
            					{
            						"chk_WF_Toggle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_ToggleOff.png')")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_ToggleOff.png')")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_ToggleOn.png')")
            								},
            								"mouseover_selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/chk_WF_ToggleOn.png')")
            								}
            							}
            						}
            					}
            				]
            			},
            			"checkboxsetitem" :
            			{
            				"parent" :
            				{
            					"CheckBoxSet" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Icon.png')"),
            								"textPadding" : nexacro.PaddingObject("5px 8px 6px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_IconD.png')"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_IconM.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_IconS.png')")
            							},
            							"readonly" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chks_WF_IconR.png')"),
            								"color" : nexacro.ColorObject("#7d7d7d")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_IconMS.png')")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_IconDS.png')"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							},
            							"readonly_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chks_WF_IconRS.png')")
            							}
            						}
            					},
            					"checkboxset" :
            					{
            						"parent" :
            						{
            							"multicombolist" :
            							{
            								"parent" :
            								{
            									"MultiCombo" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_Chkset.png')"),
            												"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            												"padding" : nexacro.PaddingObject("8px")
            											},
            											"mouseover" :
            											{
            												"color" : nexacro.ColorObject("#2f59bf")
            											},
            											"selected" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_ChksetS.png')"),
            												"color" : nexacro.ColorObject("#2f59bf")
            											},
            											"readonly" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_ChksetR.png')"),
            												"color" : nexacro.ColorObject("#7d7d7d")
            											}
            										}
            									},
            									"cellmulticombo" :
            									{
            										"parent" :
            										{
            											"GridCellControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_Chkset.png')"),
            														"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            														"padding" : nexacro.PaddingObject("8px")
            													},
            													"mouseover" :
            													{
            														"color" : nexacro.ColorObject("#2f59bf")
            													},
            													"selected" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_ChksetS.png')"),
            														"color" : nexacro.ColorObject("#2f59bf")
            													},
            													"readonly" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_ChksetR.png')"),
            														"color" : nexacro.ColorObject("#7d7d7d")
            													}
            												}
            											},
            											"ListViewCellControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_Chkset.png')"),
            														"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
            														"padding" : nexacro.PaddingObject("8px")
            													},
            													"mouseover" :
            													{
            														"color" : nexacro.ColorObject("#2f59bf")
            													},
            													"selected" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_ChksetS.png')"),
            														"color" : nexacro.ColorObject("#2f59bf")
            													},
            													"readonly" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_ChksetR.png')"),
            														"color" : nexacro.ColorObject("#7d7d7d")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Item.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 20px 0px 8px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Item.png')"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemM.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemMS.png')")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemDS.png')"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_Drop.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropD.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropP.png')")
            							}
            						}
            					},
            					"MultiCombo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_Drop.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_DropD.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_DropP.png')")
            							}
            						}
            					},
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_Drop.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropD.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropP.png')")
            							}
            						}
            					},
            					"box" :
            					{
            						"parent" :
            						{
            							"DateField" :
            							{
            								"self" :
            								{
            									"invalid" :
            									{
            									},
            									"valid" :
            									{
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_Drop.png')")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_Drop.png')")
            									}
            								}
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_Drop.png')")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_Drop.png')")
            									}
            								}
            							}
            						}
            					},
            					"cellmulticombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_Drop.png')")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_Drop.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"multicombotext" :
            			{
            				"parent" :
            				{
            					"MultiCombo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							}
            						}
            					},
            					"cellmulticombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"selectallcheckbox" :
            			{
            				"parent" :
            				{
            					"multicombolist" :
            					{
            						"parent" :
            						{
            							"MultiCombo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_SelAll.png')"),
            										"padding" : nexacro.PaddingObject("8px"),
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#b71d26")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_SelAllS.png')"),
            										"color" : nexacro.ColorObject("#ffffff")
            									}
            								}
            							},
            							"cellmulticombo" :
            							{
            								"parent" :
            								{
            									"GridCellControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_SelAll.png')"),
            												"padding" : nexacro.PaddingObject("8px"),
            												"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px")
            											},
            											"mouseover" :
            											{
            												"color" : nexacro.ColorObject("#b71d26")
            											},
            											"selected" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_SelAllS.png')"),
            												"color" : nexacro.ColorObject("#ffffff")
            											}
            										}
            									},
            									"ListViewCellControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_SelAll.png')"),
            												"padding" : nexacro.PaddingObject("8px"),
            												"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px")
            											},
            											"mouseover" :
            											{
            												"color" : nexacro.ColorObject("#b71d26")
            											},
            											"selected" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_SelAllS.png')"),
            												"color" : nexacro.ColorObject("#ffffff")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"multicombotagbox" :
            			{
            				"parent" :
            				{
            					"MultiCombo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px")
            							}
            						}
            					},
            					"cellmulticombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tagboxedit" :
            			{
            				"parent" :
            				{
            					"multicombotagbox" :
            					{
            						"parent" :
            						{
            							"MultiCombo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c7c7c7"),
            										"padding" : nexacro.PaddingObject("3px 10px")
            									}
            								}
            							},
            							"cellmulticombo" :
            							{
            								"parent" :
            								{
            									"GridCellControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #c7c7c7"),
            												"padding" : nexacro.PaddingObject("3px 10px")
            											}
            										}
            									},
            									"ListViewCellControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #c7c7c7"),
            												"padding" : nexacro.PaddingObject("3px 10px")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tagboxitem" :
            			{
            				"parent" :
            				{
            					"multicombotagbox" :
            					{
            						"parent" :
            						{
            							"MultiCombo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("5px")
            									}
            								}
            							},
            							"cellmulticombo" :
            							{
            								"parent" :
            								{
            									"GridCellControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("5px")
            											}
            										}
            									},
            									"ListViewCellControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("5px")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tagbutton" :
            			{
            				"parent" :
            				{
            					"tagboxitem" :
            					{
            						"parent" :
            						{
            							"multicombotagbox" :
            							{
            								"parent" :
            								{
            									"MultiCombo" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("0px none")
            											},
            											"focused" :
            											{
            												"border" : nexacro.BorderObject("0px none")
            											}
            										}
            									},
            									"cellmulticombo" :
            									{
            										"parent" :
            										{
            											"GridCellControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("0px none")
            													}
            												}
            											},
            											"ListViewCellControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("0px none")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tagtext" :
            			{
            				"parent" :
            				{
            					"tagboxitem" :
            					{
            						"parent" :
            						{
            							"multicombotagbox" :
            							{
            								"parent" :
            								{
            									"MultiCombo" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("2px 5px")
            											}
            										}
            									},
            									"cellmulticombo" :
            									{
            										"parent" :
            										{
            											"GridCellControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"padding" : nexacro.PaddingObject("2px 5px")
            													}
            												}
            											},
            											"ListViewCellControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"padding" : nexacro.PaddingObject("2px 5px")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac"),
            								"padding" : nexacro.PaddingObject("8px 16px"),
            								"color" : nexacro.ColorObject("#858585"),
            								"font" : nexacro.FontObject("14px \"Segoe UI\", \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#222222")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("2px solid #2f59bf, 1px solid #acacac, 0px none, 1px solid #acacac"),
            								"color" : nexacro.ColorObject("#222222"),
            								"padding" : nexacro.PaddingObject("7px 16px 8px 16px"),
            								"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\"")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_MDI_Tab" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d6dee3"),
            											"color" : nexacro.ColorObject("#c3c3c3"),
            											"padding" : nexacro.PaddingObject("6px 10px 6px 10px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d6dee3"),
            											"color" : nexacro.ColorObject("#c3c3c3"),
            											"padding" : nexacro.PaddingObject("6px 10px 6px 10px")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d6dee3"),
            											"color" : nexacro.ColorObject("#c3c3c3"),
            											"padding" : nexacro.PaddingObject("6px 10px 6px 10px")
            										},
            										"selected" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d6dee3, 1px solid #d6dee3, 0px none, 1px solid #d6dee3"),
            											"color" : nexacro.ColorObject("#222222"),
            											"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            											"padding" : nexacro.PaddingObject("6px 10px 8px 10px")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_MDI_Tab" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d6dee3")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtn.png')"),
            								"padding" : nexacro.PaddingObject("2px 3px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnM.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnD.png')")
            							}
            						}
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtn.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtnP.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtnP.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtnD.png')")
            									}
            								}
            							},
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')")
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Nextbtn.png')")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PrevBtn.png')"),
            								"padding" : nexacro.PaddingObject("2px 3px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PrevBtnM.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PrevBtnD.png')")
            							}
            						}
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtn.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtnP.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtnP.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtnD.png')")
            									}
            								}
            							},
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')")
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Prevbtn.png')")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/tab_WF_Exrabtn.png')"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitemicon" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/tab_WF_BtnIcon.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpndn.png')"),
            								"border" : nexacro.BorderObject("1px solid #acacac,0px none,0px none,1px solid #acacac")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpndnP.png')"),
            								"border" : nexacro.BorderObject("1px solid #2f59bf,0px none,0px none,1px solid #2f59bf")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpndnP.png')"),
            								"border" : nexacro.BorderObject("1px solid #2f59bf,0px none,0px none,1px solid #2f59bf")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6,0px none,0px none,1px solid #e6e6e6"),
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpndnD.png')")
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnup.png')"),
            								"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #acacac")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnupP.png')"),
            								"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #2f59b")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnupP.png')"),
            								"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #2f59b")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none, 0px none,1px solid #e6e6e6"),
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnupD.png')")
            							}
            						}
            					}
            				}
            			},
            			"DateRangePicker" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					}
            				}
            			},
            			"PopupDateRangePicker" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					}
            				}
            			},
            			"cancelbutton" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            								"padding" : nexacro.PaddingObject("8px")
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            								"padding" : nexacro.PaddingObject("8px")
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            								"padding" : nexacro.PaddingObject("8px")
            							},
            							"mouseover" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"okbutton" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            								"padding" : nexacro.PaddingObject("8px")
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            								"padding" : nexacro.PaddingObject("8px")
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            								"padding" : nexacro.PaddingObject("8px")
            							},
            							"mouseover" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"datepickergroup" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("5px 0px")
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("5px 0px")
            							}
            						}
            					}
            				}
            			},
            			"splitline" :
            			{
            				"parent" :
            				{
            					"datepickergroup" :
            					{
            						"parent" :
            						{
            							"DateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #acacac")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #acacac")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #acacac")
            									}
            								}
            							}
            						}
            					},
            					"timepickergroup" :
            					{
            						"parent" :
            						{
            							"DateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #acacac")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #acacac")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #acacac")
            									}
            								}
            							}
            						}
            					},
            					"PickerHeadLineControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e4e3ee")
            							}
            						}
            					}
            				}
            			},
            			"datepicker" :
            			{
            				"parent" :
            				{
            					"datepickergroup" :
            					{
            						"parent" :
            						{
            							"DateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("0px 3px")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("0px 3px")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("0px 3px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekband" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"datepickergroup" :
            									{
            										"parent" :
            										{
            											"DateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("0px none,0px none,1px solid #acacac")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("0px none,0px none,1px solid #acacac")
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("0px none,0px none,1px solid #acacac")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"datetabbutton" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Datetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Datetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Datetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Datetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Datetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Datetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Datetab.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Datetab.png')")
            							}
            						}
            					}
            				}
            			},
            			"timetabbutton" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Timetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Timetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Timetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Timetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Timetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Timetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"DateRangePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Timetab.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/dtrp_WF_Timetab.png')")
            							}
            						}
            					}
            				}
            			},
            			"timepickergroup" :
            			{
            				"parent" :
            				{
            					"DateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("5px 0px")
            							}
            						}
            					},
            					"PopupDateRangePicker" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("5px 0px")
            							}
            						}
            					}
            				}
            			},
            			"PickerHeadLineControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("10px 0px")
            					}
            				}
            			},
            			"startdate" :
            			{
            				"parent" :
            				{
            					"PickerHeadLineControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("10px 0px 0px 0px")
            							}
            						}
            					}
            				}
            			},
            			"enddate" :
            			{
            				"parent" :
            				{
            					"PickerHeadLineControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("10px 0px 0px 0px")
            							}
            						}
            					}
            				}
            			},
            			"endsubdate" :
            			{
            				"parent" :
            				{
            					"PickerHeadLineControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
            							}
            						}
            					}
            				}
            			},
            			"startsubdate" :
            			{
            				"parent" :
            				{
            					"PickerHeadLineControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
            							}
            						}
            					}
            				}
            			},
            			"TimePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("10px")
            					}
            				}
            			},
            			"spinneritem" :
            			{
            				"parent" :
            				{
            					"ampmspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("13px \"Segoe UI\", \"Malgun Gothic\"")
            									},
            									"selected" :
            									{
            										"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            									}
            								}
            							}
            						}
            					},
            					"hourspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"selected" :
            									{
            										"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            									}
            								}
            							}
            						}
            					},
            					"minspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"selected" :
            									{
            										"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            									}
            								}
            							}
            						}
            					},
            					"secspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"selected" :
            									{
            										"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"overlaybottom" :
            			{
            				"parent" :
            				{
            					"hourspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #bfbfbf, 0px none, 0px none")
            									}
            								}
            							}
            						}
            					},
            					"minspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #bfbfbf, 0px none, 0px none")
            									}
            								}
            							}
            						}
            					},
            					"secspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #bfbfbf, 0px none, 0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"overlaytop" :
            			{
            				"parent" :
            				{
            					"hourspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #bfbfbf")
            									}
            								}
            							}
            						}
            					},
            					"minspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #bfbfbf")
            									}
            								}
            							}
            						}
            					},
            					"secspinner" :
            					{
            						"parent" :
            						{
            							"TimePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #bfbfbf")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"box" :
            			{
            				"parent" :
            				{
            					"DateField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"invalid" :
            							{
            								"border" : nexacro.BorderObject("1px solid #b71d26"),
            								"color" : nexacro.ColorObject("#b71d26")
            							},
            							"valid" :
            							{
            								"border" : nexacro.BorderObject("1px solid #618e02"),
            								"color" : nexacro.ColorObject("#618e02")
            							}
            						}
            					},
            					"TextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"invalid" :
            							{
            								"border" : nexacro.BorderObject("1px solid #b71d26")
            							},
            							"valid" :
            							{
            								"border" : nexacro.BorderObject("1px solid #618e02")
            							}
            						},
            						"class" :
            						[
            							{
            								"txtf_LOGIN_ID" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,1px solid #002795")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,1px solid #bf952f")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,1px solid #bf952f")
            										}
            									}
            								}
            							},
            							{
            								"txtf_LOGIN_PW" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,1px solid #002795")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,1px solid #bf952f")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,1px solid #bf952f")
            										}
            									}
            								}
            							}
            						]
            					},
            					"MultiLineTextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac"),
            								"padding" : nexacro.PaddingObject("10px"),
            								"wordWrap" : "char",
            								"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					}
            				}
            			},
            			"nulltext" :
            			{
            				"parent" :
            				{
            					"DateField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#acacac"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							}
            						}
            					},
            					"TextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#acacac"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							}
            						}
            					},
            					"MultiLineTextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#acacac"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							}
            						}
            					}
            				}
            			},
            			"DateRangePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					}
            				}
            			},
            			"trailingbutton" :
            			{
            				"parent" :
            				{
            					"box" :
            					{
            						"parent" :
            						{
            							"TextField" :
            							{
            								"self" :
            								{
            									"invalid" :
            									{
            									},
            									"valid" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"postfixtext" :
            			{
            				"parent" :
            				{
            					"box" :
            					{
            						"parent" :
            						{
            							"TextField" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#acacac")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"prefixtext" :
            			{
            				"parent" :
            				{
            					"box" :
            					{
            						"parent" :
            						{
            							"TextField" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#acacac")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"charcounttext" :
            			{
            				"parent" :
            				{
            					"TextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("11px \"Segoe UI\", \"Malgun Gothic\""),
            								"color" : nexacro.ColorObject("#666666"),
            								"padding" : nexacro.PaddingObject("5px 10px 0px 0px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					},
            					"MultiLineTextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("11px \"Segoe UI\", \"Malgun Gothic\""),
            								"color" : nexacro.ColorObject("#666666"),
            								"padding" : nexacro.PaddingObject("5px 10px 0px 0px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					}
            				}
            			},
            			"FieldBaseTextControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("5px 0px 0px 10px"),
            						"font" : nexacro.FontObject("11px \"Segoe UI\", \"Malgun Gothic\""),
            						"color" : nexacro.ColorObject("#666666")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#a9a9a9")
            					},
            					"valid" :
            					{
            						"color" : nexacro.ColorObject("#618e02")
            					},
            					"invalid" :
            					{
            						"color" : nexacro.ColorObject("#b71d26")
            					}
            				}
            			},
            			"FieldBaseLabelControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#778899"),
            						"padding" : nexacro.PaddingObject("0px 10px")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#a9a9a9")
            					},
            					"floating" :
            					{
            						"font" : nexacro.FontObject("12px \"Segoe UI\", \"Malgun Gothic\""),
            						"padding" : nexacro.PaddingObject("2px 5px")
            					},
            					"focused_floating" :
            					{
            						"color" : nexacro.ColorObject("#2f59bf")
            					},
            					"mouseover_floating" :
            					{
            						"color" : nexacro.ColorObject("#2f59bf")
            					},
            					"floatinginvalid" :
            					{
            						"color" : nexacro.ColorObject("#b71d26"),
            						"font" : nexacro.FontObject("12px \"Segoe UI\", \"Malgun Gothic\""),
            						"padding" : nexacro.PaddingObject("2px 5px")
            					},
            					"floatingvalid" :
            					{
            						"color" : nexacro.ColorObject("#618e02"),
            						"font" : nexacro.FontObject("12px \"Segoe UI\", \"Malgun Gothic\""),
            						"padding" : nexacro.PaddingObject("2px 5px")
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_LF_Detail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_LF_Tree" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_Main" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d6d7d8,0px none,0px none,0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"selection" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("2px solid #1e90ff")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #cdcece"),
            												"padding" : nexacro.PaddingObject("3px"),
            												"letterSpacing" : nexacro.CSSValueObject("0px")
            											},
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_LF_Detail" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"font" : nexacro.FontObject("12px \"Segoe UI\", \"Malgun Gothic\""),
            															"color" : nexacro.ColorObject("#ffffff")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#262626")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#262626"),
            															"font" : nexacro.FontObject("12px \"Segoe UI\", \"Malgun Gothic\"")
            														}
            													}
            												}
            											},
            											{
            												"grd_LF_Tree" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#1c1c1c"),
            															"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\"")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#002795"),
            															"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\"")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#002795"),
            															"font" : nexacro.FontObject("600 14px  \"Segoe UI\", \"Malgun Gothic\"")
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_Main" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            															"color" : nexacro.ColorObject("#4d4f5c"),
            															"padding" : nexacro.PaddingObject("0px")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            															"color" : nexacro.ColorObject("#4d4f5c"),
            															"padding" : nexacro.PaddingObject("0px")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            															"color" : nexacro.ColorObject("#4d4f5c"),
            															"padding" : nexacro.PaddingObject("0px")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #cdcece"),
            												"color" : nexacro.ColorObject("#222222"),
            												"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            											}
            										}
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #cdcece"),
            												"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"lstv_WF_BLabel" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            													"color" : nexacro.ColorObject("#444444")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BContents" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"color" : nexacro.ColorObject("#616161")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_DLabel" :
            						{
            							"parent" :
            							{
            								"detail" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                "),
            													"color" : nexacro.ColorObject("#444444")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_DContents" :
            						{
            							"parent" :
            							{
            								"detail" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\""),
            													"wordWrap" : "english",
            													"color" : nexacro.ColorObject("#616161")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"grd_LF_TreeCell" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_Tree" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"color" : nexacro.ColorObject("#1c1c1c"),
            																		"font" : nexacro.FontObject("13px \"Segoe UI\", \"Malgun Gothic\"")
            																	},
            																	"mouseover" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"color" : nexacro.ColorObject("#002795"),
            																		"font" : nexacro.FontObject("13px \"Segoe UI\", \"Malgun Gothic\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#dc3545"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Right" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_WF_Main" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#acacac"),
            																		"font" : nexacro.FontObject("13px \"Segoe UI\", \"Malgun Gothic\""),
            																		"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#acacac"),
            																		"font" : nexacro.FontObject("13px \"Segoe UI\", \"Malgun Gothic\""),
            																		"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#acacac"),
            																		"font" : nexacro.FontObject("13px \"Segoe UI\", \"Malgun Gothic\""),
            																		"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_ExprF" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#dc3545"),
            															"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_ExprM" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#007bff"),
            															"font" : nexacro.FontObject("600 16px  \"Segoe UI\", \"Malgun Gothic\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"vscrollbar" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						},
            						"class" :
            						[
            							{
            								"grd_LF_Detail" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("3px 0px")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					},
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"cell_WF_UploadBtn" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            																},
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            																},
            																"pushed" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            																},
            																"disabled" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							{
            								"cell_WF_DnloadBtn" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            																},
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            																},
            																"pushed" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            																},
            																"disabled" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("600 13px \"Segoe UI\", \"Malgun Gothic\"                ")
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"cellcalendar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							}
            						}
            					}
            				}
            			},
            			"cellcheckbox" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_Cellchk.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_Cellchk.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellchkS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellchkS.png')")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_Cellchk.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_Cellchk.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellchkS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellchkS.png')")
            							}
            						}
            					}
            				}
            			},
            			"cellcombo" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							}
            						}
            					}
            				}
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					},
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"cell_WF_EdtEssential" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #c15e3b")
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					}
            				}
            			},
            			"celltextarea" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac"),
            								"padding" : nexacro.PaddingObject("4px 8px"),
            								"wordWrap" : "char",
            								"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac"),
            								"padding" : nexacro.PaddingObject("8px"),
            								"wordWrap" : "char",
            								"font" : nexacro.FontObject("13px/21px \"Segoe UI\",\"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #2f59bf")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e6e6e6"),
            								"color" : nexacro.ColorObject("#a9a9a9")
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellExp.png')")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellExp.png')")
            							}
            						}
            					}
            				}
            			},
            			"cellselection" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid #6a5acd")
            							}
            						}
            					}
            				}
            			},
            			"cellradioitem" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_Cellrdo.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_Cellrdo.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellrdoS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellrdoS.png')")
            							}
            						}
            					}
            				}
            			},
            			"cellmulticombo" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #acacac")
            							}
            						}
            					}
            				}
            			},
            			"celltreeline" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px dotted #acacac")
            							}
            						}
            					}
            				}
            			},
            			"treeitemcheckbox" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Icon.png')")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_IconS.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeCollBtn.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeExpBtn.png')")
            									}
            								}
            							},
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"class" :
            														[
            															{
            																"grd_LF_Tree" :
            																{
            																	"self" :
            																	{
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeColl.png')")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeExp.png')")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeCollImg.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeExpImg.png')")
            									},
            									"leaf" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeleafImg.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #acacac")
            					}
            				}
            			},
            			"detail" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #dbdee2, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"expandbar" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_BarCollbtn.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_BarExpbtn.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"label" :
            			{
            				"parent" :
            				{
            					"TextField" :
            					{
            						"class" :
            						[
            							{
            								"txtf_LOGIN_ID" :
            								{
            									"self" :
            									{
            										"floating" :
            										{
            											"color" : nexacro.ColorObject("#002795")
            										}
            									}
            								}
            							},
            							{
            								"txtf_LOGIN_PW" :
            								{
            									"self" :
            									{
            										"floating" :
            										{
            											"color" : nexacro.ColorObject("#002795")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"leadingbutton" :
            			{
            				"parent" :
            				{
            					"box" :
            					{
            						"parent" :
            						{
            							"TextField" :
            							{
            								"class" :
            								[
            									{
            										"txtf_LOGIN_ID" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"padding" : nexacro.PaddingObject("15px 0px 0px 10px")
            												}
            											}
            										}
            									},
            									{
            										"txtf_LOGIN_PW" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"padding" : nexacro.PaddingObject("15px 0px 0px 10px")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"Div" :
            			{
            				"class" :
            				[
            					{
            						"div_MF_Notice" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #a3bbc1")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_Area" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1")
            								}
            							}
            						}
            					},
            					{
            						"div_LF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #d6dee3, 1px solid #d6dee3, 1px solid #d6dee3")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,1px solid #d6dee3,1px solid #d6dee3")
            								}
            							}
            						}
            					}
            				]
            			},
            			"PopupDiv" :
            			{
            				"class" :
            				[
            					{
            						"pdiv_WF_Area" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1")
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true,
            			"hasListViewExpandStatus" : true,
            			"applyMarkupValidation" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/btn_TITLE_Close.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TITLE_CloseP.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TITLE_CloseD.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TITLE_Max.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TITLE_MaxP.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TITLE_MaxD.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TITLE_Min.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TITLE_MinP.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TITLE_MinD.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TITLE_Normal.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TITLE_NormalP.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TITLE_NormalD.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_SB_Grip.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineV.png")] = { width:9, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineH.png")] = { width:17, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_Essential.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/stp_WF_Item.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/stp_WF_ItemS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_ChkIcon.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_Expand.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDec.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDecM.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDecD.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HInc.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HIncM.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HIncD.png")] = { width:4, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDec.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDecM.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDecD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VInc.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VIncM.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VIncD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_Dnbtn.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnM.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_Upbtn.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnM.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Icon.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_ToggleOff.png")] = { width:80, height:31 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_ToggleOn.png")] = { width:80, height:31 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_IconD.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_IconM.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_IconS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_IconMS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_IconDS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chks_WF_IconR.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chks_WF_IconRS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Item.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemM.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemMS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemDS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_Drop.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropD.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropP.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/mcbo_WF_Drop.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/mcbo_WF_DropD.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/mcbo_WF_DropP.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/mcbo_WF_SelAll.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/mcbo_WF_SelAllS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/mcbo_WF_Chkset.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/mcbo_WF_ChksetS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/mcbo_WF_ChksetR.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/mcbo_WF_TagBtn.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtn.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtnM.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtnD.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtn.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnM.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnD.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_Exrabtn.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_BtnIcon.png")] = { width:20, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_Drop.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropD.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropP.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpndn.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpndnP.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpndnD.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnup.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnupP.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnupD.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtn.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtnP.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtnD.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtn.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnP.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnD.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpndnBtn.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpndnBtnP.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpndnBtnD.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnupBtn.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnupBtnP.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnupBtnD.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/dtrp_WF_Nextbtn.png")] = { width:14, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/dtrp_WF_Prevbtn.png")] = { width:14, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/dtrp_WF_Datetab.png")] = { width:21, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/dtrp_WF_Timetab.png")] = { width:21, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/dtf_WF_DropInvalidIcon.png")] = { width:17, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/dtf_WF_DropvalidIcon.png")] = { width:17, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_WF_Email.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_WF_Delete.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/txtf_WF_InvalidIcon.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/txtf_WF_ValidIcon.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_Cellchk.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellchkS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellExp.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_Cellrdo.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellrdoS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImg.png")] = { width:16, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImg.png")] = { width:16, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeleafImg.png")] = { width:9, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_BarCollbtn.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_BarExpbtn.png")] = { width:14, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_LOGIN_ID.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_LOGIN_PW.png")] = { width:15, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_LOGIN_Tobe.png")] = { width:145, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_Login.png")] = { width:382, height:124 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Home.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Max.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Min.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Open.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Verti.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Close.png")] = { width:6, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Collapse.png")] = { width:56, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Expand.png")] = { width:56, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MF_Close.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Horz.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_AllX.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_Tobe.png")] = { width:117, height:25 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_NexacroN.png")] = { width:165, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Logo.png")] = { width:24, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Prev.png")] = { width:6, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Next.png")] = { width:6, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TF_PushN.png")] = { width:22, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeColl.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeExp.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Mnu.png")] = { width:17, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Home.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Bookmark.png")] = { width:20, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Search.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Setting.png")] = { width:20, height:21 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Find.png")] = { width:15, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Change.png")] = { width:9, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_Pin.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Logout.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/img_KeyClient.png")] = { width:38, height:38 };
        		imgcache[nexacro._getImageLocation("theme://images/img_BuildRef.png")] = { width:38, height:38 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Share.png")] = { width:38, height:38 };
        		imgcache[nexacro._getImageLocation("theme://images/img_DevOps.png")] = { width:120, height:53 };
        		imgcache[nexacro._getImageLocation("theme://images/img_NexaAssist.png")] = { width:122, height:25 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TobePro.png")] = { width:123, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_XAgent.png")] = { width:123, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/img_NexacroN.png")] = { width:125, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagingNext.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagingPrev.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagingDNext.png")] = { width:12, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagingDPrev.png")] = { width:12, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Play.png")] = { width:58, height:85 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Guide.png")] = { width:86, height:83 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Support.png")] = { width:64, height:85 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Add.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Delete.png")] = { width:13, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ExecIcon.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_MainImg.png")] = { width:477, height:371 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_MainTxt.png")] = { width:434, height:95 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_POP_Close.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/pgb_WF_BarImage.png")] = { width:12, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Main.png")] = { width:1003, height:404 };
        		imgcache[nexacro._getImageLocation("theme://images/img_MF_Notice.png")] = { width:48, height:48 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_Dot.png")] = { width:5, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_SubTitle.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Find.png")] = { width:15, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLN.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SuttleLM.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleLD.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRN.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SuttleRM.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleRD.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTN.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SuttleTM.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleTD.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleBN.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SuttleBM.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_suttleBD.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_UploadBtn.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_DnloadBtn.png")] = { width:0, height:0 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PlayIcon.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BaseL.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BaseR.png")] = { width:6, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BaseT.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BaseB.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BookMark.png")] = { width:19, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BookMarkS.png")] = { width:19, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Confirm.png")] = { width:50, height:50 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Error.png")] = { width:50, height:50 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Info.png")] = { width:50, height:50 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Warning.png")] = { width:44, height:44 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Question.png")] = { width:50, height:50 };
        		imgcache[nexacro._getImageLocation("theme://mobile/chk_WF_Box.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/chk_WF_BoxS.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/chk_WF_BoxD.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/chks_WF_ItemR.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/chks_WF_ItemRS.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/rdo_WF_Item.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/rdo_WF_ItemS.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/rdo_WF_ItemD.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/cbo_WF_Drop.png")] = { width:20, height:12 };
        		imgcache[nexacro._getImageLocation("theme://mobile/mcbo_WF_Drop.png")] = { width:15, height:13 };
        		imgcache[nexacro._getImageLocation("theme://mobile/mcbo_WF_DropD.png")] = { width:15, height:13 };
        		imgcache[nexacro._getImageLocation("theme://mobile/mcbo_WF_SelAll.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/mcbo_WF_SelAllS.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/mcbo_WF_Chkset.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/mcbo_WF_TagBtn.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://mobile/tab_WF_NextBtn.png")] = { width:9, height:14 };
        		imgcache[nexacro._getImageLocation("theme://mobile/tab_WF_NextBtnD.png")] = { width:9, height:14 };
        		imgcache[nexacro._getImageLocation("theme://mobile/tab_WF_PrevBtn.png")] = { width:9, height:14 };
        		imgcache[nexacro._getImageLocation("theme://mobile/tab_WF_PrevBtnD.png")] = { width:9, height:14 };
        		imgcache[nexacro._getImageLocation("theme://mobile/tab_WF_ExtraBtn.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://mobile/tab_WF_ExtraBtnS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://mobile/cal_WF_Drop.png")] = { width:21, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/cal_WF_NextBtn.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://mobile/cal_WF_PrevBtn.png")] = { width:13, height:15 };
        		imgcache[nexacro._getImageLocation("theme://mobile/cal_WF_SpndnBtn.png")] = { width:8, height:7 };
        		imgcache[nexacro._getImageLocation("theme://mobile/cal_WF_SpnupBtn.png")] = { width:8, height:7 };
        		imgcache[nexacro._getImageLocation("theme://mobile/dtrp_WF_Nextbtn.png")] = { width:23, height:14 };
        		imgcache[nexacro._getImageLocation("theme://mobile/dtrp_WF_Prevbtn.png")] = { width:23, height:14 };
        		imgcache[nexacro._getImageLocation("theme://mobile/dtrp_WF_Datetab.png")] = { width:19, height:21 };
        		imgcache[nexacro._getImageLocation("theme://mobile/dtrp_WF_Timetab.png")] = { width:21, height:21 };
        		imgcache[nexacro._getImageLocation("theme://mobile/dtf_WF_Drop.png")] = { width:21, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/dtf_WF_DropD.png")] = { width:21, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/dtf_WF_DropInvalidIcon.png")] = { width:21, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/dtf_WF_DropvalidIcon.png")] = { width:21, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/txtf_WF_InvalidIcon.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://mobile/txtf_WF_ValidIcon.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://mobile/grd_WF_BtnTreeColl.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://mobile/grd_WF_BtnTreeExpand.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://mobile/grd_WF_ImgTreeColl.png")] = { width:20, height:15 };
        		imgcache[nexacro._getImageLocation("theme://mobile/grd_WF_ImgTreeExpand.png")] = { width:20, height:14 };
        		imgcache[nexacro._getImageLocation("theme://mobile/grd_WF_ImgTreeLeaf.png")] = { width:15, height:20 };
        		imgcache[nexacro._getImageLocation("theme://mobile/grd_WF_CellExp.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://mobile/lstv_WF_BarCollbtn.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/lstv_WF_BarExpbtn.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/sta_LOGIN_Logo.png")] = { width:148, height:113 };
        		imgcache[nexacro._getImageLocation("theme://mobile/txtf_LOGIN_ID.png")] = { width:25, height:25 };
        		imgcache[nexacro._getImageLocation("theme://mobile/txtf_LOGIN_PW.png")] = { width:21, height:25 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_Home.png")] = { width:22, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_Menu.png")] = { width:25, height:17 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_Mypage.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_Setting.png")] = { width:23, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/sta_MF_Logo.png")] = { width:230, height:33 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_PrevPage.png")] = { width:14, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_Logout.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://mobile/sta_MF_Info.png")] = { width:80, height:80 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_MnuWeb.png")] = { width:80, height:64 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_MnuCamera.png")] = { width:76, height:68 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_MnuMLM.png")] = { width:74, height:70 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_MnuComp.png")] = { width:74, height:72 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_MnuListView.png")] = { width:81, height:65 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_MnuStep.png")] = { width:92, height:60 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_Close.png")] = { width:30, height:30 };
        		imgcache[nexacro._getImageLocation("theme://mobile/sta_MLM_TOBECI.png")] = { width:128, height:28 };
        		imgcache[nexacro._getImageLocation("theme://mobile/sta_MLM_bg.png")] = { width:3, height:696 };
        		imgcache[nexacro._getImageLocation("theme://mobile/sta_MLM_img.png")] = { width:420, height:338 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MLM_mnu.png")] = { width:33, height:29 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MLM_home.png")] = { width:36, height:33 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MLM_commuIcon.png")] = { width:38, height:35 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MLM_inquIcon.png")] = { width:36, height:36 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MLM_suppIcon.png")] = { width:42, height:28 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MLM_guideIcon.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MLM_Close.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://mobile/grd_WF_TreeColl.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://mobile/grd_WF_TreeExpand.png")] = { width:14, height:3 };
        		imgcache[nexacro._getImageLocation("theme://mobile/icon_WF_MSubTitle.png")] = { width:6, height:6 };
        		imgcache[nexacro._getImageLocation("theme://mobile/chk_WF_Toggle.png")] = { width:100, height:40 };
        		imgcache[nexacro._getImageLocation("theme://mobile/chk_WF_ToggleS.png")] = { width:100, height:40 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_WF_Camera.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Book.png")] = { width:13, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_BookmarkS.png")] = { width:18, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_BookS.png")] = { width:13, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Close.png")] = { width:9, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Menu.png")] = { width:18, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_MenuS.png")] = { width:18, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_MnuS.png")] = { width:13, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Open.png")] = { width:9, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Logo2.png")] = { width:24, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/dtrp_WF_DatetabS.png")] = { width:21, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/dtrp_WF_TimetabS.png")] = { width:21, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_Close.png")] = { width:40, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_Ing.png")] = { width:40, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/img_DevPro.png")] = { width:101, height:68 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Global.png")] = { width:38, height:38 };
        		imgcache[nexacro._getImageLocation("theme://images/img_LF_Change.png")] = { width:9, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/img_MP.png")] = { width:101, height:67 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Nexacro.png")] = { width:101, height:67 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Tobemall.png")] = { width:101, height:67 };
        		imgcache[nexacro._getImageLocation("theme://images/img_UXPro.png")] = { width:101, height:71 };
        		imgcache[nexacro._getImageLocation("theme://images/img_XP.png")] = { width:101, height:67 };
        		imgcache[nexacro._getImageLocation("theme://images/img_XPush.png")] = { width:101, height:67 };
        		imgcache[nexacro._getImageLocation("theme://images/img_ZERP.png")] = { width:101, height:67 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_DataIconCut.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_DatasIconPaste.png")] = { width:14, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemD.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_Nexacro.png")] = { width:131, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Des.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Maintxt2.png")] = { width:434, height:95 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_MDI_Extra.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_MDI_ExtraS.png")] = { width:9, height:8 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_MLM.png")] = { width:80, height:77 };
        		imgcache[nexacro._getImageLocation("theme://mobile/btn_MF_Mobile.png")] = { width:75, height:75 };
        		imgcache[nexacro._getImageLocation("theme://mobile/dtrp_WF_DatetabS.png")] = { width:19, height:21 };
        		imgcache[nexacro._getImageLocation("theme://mobile/dtrp_WF_TimetabS.png")] = { width:21, height:21 };
        		imgcache[nexacro._getImageLocation("theme://mobile/grd_MF_MnuIcon.png")] = { width:13, height:19 };
        		imgcache[nexacro._getImageLocation("theme://mobile/icon_Convention.png")] = { width:40, height:20 };
        		imgcache[nexacro._getImageLocation("theme://mobile/icon_Education.png")] = { width:40, height:20 };
        		imgcache[nexacro._getImageLocation("theme://mobile/icon_Event.png")] = { width:40, height:20 };
        		imgcache[nexacro._getImageLocation("theme://mobile/icon_MB_mnuStar_yel.png")] = { width:17, height:16 };
        		imgcache[nexacro._getImageLocation("theme://mobile/icon_Meeting.png")] = { width:40, height:20 };
        		imgcache[nexacro._getImageLocation("theme://mobile/icon_WF_MSubTitle2.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://mobile/img_movie_diehard.png")] = { width:199, height:265 };
        		imgcache[nexacro._getImageLocation("theme://mobile/img_movie_negotiator.png")] = { width:227, height:317 };
        		imgcache[nexacro._getImageLocation("theme://mobile/img_movie_net.png")] = { width:280, height:406 };
        		imgcache[nexacro._getImageLocation("theme://mobile/img_movie_shawshank.png")] = { width:165, height:313 };
        		imgcache[nexacro._getImageLocation("theme://mobile/img_movie_slidingdoors.png")] = { width:196, height:278 };
        		imgcache[nexacro._getImageLocation("theme://mobile/img_movie_terminator2.png")] = { width:177, height:265 };
        		imgcache[nexacro._getImageLocation("theme://mobile/img_movie_unbreakable.png")] = { width:199, height:294 };
        		imgcache[nexacro._getImageLocation("theme://mobile/sta_LOGIN_Logo2.png")] = { width:206, height:46 };
	};
}
)();
