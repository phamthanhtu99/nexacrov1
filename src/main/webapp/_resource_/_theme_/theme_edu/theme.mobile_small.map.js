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
            						"border" : nexacro.BorderObject("1px solid #00103f"),
            						"font" : nexacro.FontObject("20px \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            					}
            				}
            			},
            			"Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#555555"),
            						"font" : nexacro.FontObject("20px \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
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
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
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
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
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
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
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
            						"sta_MF_BarBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1.2rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_Info" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem/150%  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"sta_MLM_Bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("url('theme://mobile/sta_MLM_bg.png') 1px 1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_MLM_PopTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.9rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"sta_MLM_TeamName" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"sta_MLM_Label" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("0.9rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"sta_MLM_Detail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("0.9rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_MTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("1.2rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"color" : nexacro.ColorObject("#1d1d1d")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_MSubTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#1d1d1d")
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
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
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
            						"padding" : nexacro.PaddingObject("0px 10px")
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
            						"padding" : nexacro.PaddingObject("0px 10px")
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
            						"padding" : nexacro.PaddingObject("5px 10px"),
            						"font" : nexacro.FontObject("1rem/150%  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
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
            								"padding" : nexacro.PaddingObject("8px 10px")
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
            								"padding" : nexacro.PaddingObject("8px 10px")
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
            				}
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
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
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
            										"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
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
            										"padding" : nexacro.PaddingObject("5px 5px 5px 10px")
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
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
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
            										"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
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
            														"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
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
            														"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
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
            														"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
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
            														"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
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
            														"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
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
            														"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
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
            													"enabled" :
            													{
            														"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            													},
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
            													"enabled" :
            													{
            														"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            													},
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
            													"enabled" :
            													{
            														"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            													},
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
            													"enabled" :
            													{
            														"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            													},
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
            													"enabled" :
            													{
            														"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            													},
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
            													"enabled" :
            													{
            														"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            													},
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
            				}
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
            						}
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
            										"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
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
            										"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
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
            			"VScrollIndicatorControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #acacac"),
            						"padding" : nexacro.PaddingObject("0px 3px")
            					}
            				}
            			},
            			"EditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 10px")
            					}
            				}
            			},
            			"MaskEditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 10px")
            					}
            				}
            			},
            			"TextAreaControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("5px 10px"),
            						"font" : nexacro.FontObject("1rem/150%  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf"),
            						"padding" : nexacro.PaddingObject("0px"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf"),
            						"padding" : nexacro.PaddingObject("0px"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #2f59bf"),
            						"padding" : nexacro.PaddingObject("0px"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #002795"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("1px solid #002795"),
            						"color" : nexacro.ColorObject("#ffffff")
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
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1.2rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("2px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1.2rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("2px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1.2rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("2px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1.2rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("2px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1.2rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("2px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Home" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Home.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Home.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Home.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Home.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Home.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Menu.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("7px 0px 0px 0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("5px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Menu.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("7px 0px 0px 0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("5px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Menu.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("7px 0px 0px 0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("5px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Menu.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("7px 0px 0px 0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("5px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Menu.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("7px 0px 0px 0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("5px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Mypage" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Mypage.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Mypage.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Mypage.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Mypage.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Mypage.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Setting" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Setting.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Setting.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Setting.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Setting.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Setting.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("3px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_PrevPage" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_PrevPage.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_PrevPage.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_PrevPage.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_PrevPage.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_PrevPage.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_Logout" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Logout.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Logout.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Logout.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Logout.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MF_Logout.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_MnuWeb" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuWeb.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuWeb.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuWeb.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuWeb.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuWeb.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_MnuCamera" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuCamera.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuCamera.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuCamera.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuCamera.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuCamera.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_MnuMLM" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuMLM.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuMLM.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuMLM.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuMLM.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuMLM.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_MnuComp" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuComp.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuComp.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuComp.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuComp.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuComp.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_MnuListView" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuListView.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuListView.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuListView.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuListView.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuListView.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_MnuStep" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuStep.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuStep.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuStep.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuStep.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_MnuStep.png\")"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("15px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
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
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_Close.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_Close.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_Close.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_Close.png\")")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_MF_Close.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Ok" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #018786"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1.1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("5px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #018786"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1.1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("5px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #018786"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1.1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("5px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #018786"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1.1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("5px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #018786"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("1.1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("5px")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Cancel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #ced4da"),
            									"color" : nexacro.ColorObject("#868e96"),
            									"font" : nexacro.FontObject("1.1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("5px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("2px solid #ced4da"),
            									"color" : nexacro.ColorObject("#868e96"),
            									"font" : nexacro.FontObject("1.1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("5px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("2px solid #ced4da"),
            									"color" : nexacro.ColorObject("#868e96"),
            									"font" : nexacro.FontObject("1.1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("5px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("2px solid #ced4da"),
            									"color" : nexacro.ColorObject("#868e96"),
            									"font" : nexacro.FontObject("1.1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("5px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("2px solid #ced4da"),
            									"color" : nexacro.ColorObject("#868e96"),
            									"font" : nexacro.FontObject("1.1rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            									"letterSpacing" : nexacro.CSSValueObject("5px")
            								}
            							}
            						}
            					},
            					{
            						"btn_MLM_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_mnu.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_mnu.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_mnu.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_mnu.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_mnu.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_mnu.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MLM_Home" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_home.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_home.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_home.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_home.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_home.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_home.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MLM_Cmunity" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_commuIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_commuIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_commuIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_commuIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_commuIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_commuIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MLM_Inquiry" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_inquIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("9px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_inquIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("9px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_inquIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("9px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_inquIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("9px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_inquIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("9px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_inquIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("9px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MLM_Support" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_suppIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("17px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_suppIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("17px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_suppIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("17px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_suppIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("17px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_suppIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("17px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_suppIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("17px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MLM_Guide" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_guideIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("13px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_guideIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("13px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_guideIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("13px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_guideIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("13px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_guideIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("13px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_guideIcon.png')"),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("13px 0px 0px 0px"),
            									"border" : nexacro.BorderObject("0px none"),
            									"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            								}
            							}
            						}
            					},
            					{
            						"btn_MLM_PopClose" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_Close.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_Close.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_Close.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_Close.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_Close.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://mobile/btn_MLM_Close.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_SliderPoint" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
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
            						"btn_WF_Camera" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #acacac"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_WF_Camera.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"color" : nexacro.ColorObject("#555555")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #acacac"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_WF_Camera.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"color" : nexacro.ColorObject("#555555")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #acacac"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_WF_Camera.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"color" : nexacro.ColorObject("#555555")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #acacac"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_WF_Camera.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"color" : nexacro.ColorObject("#555555")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #acacac"),
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/btn_WF_Camera.png\")"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"color" : nexacro.ColorObject("#555555")
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
            									"border" : nexacro.BorderObject("1px solid #30b5bf"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #30b5bf"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0f506e"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0f506e"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					}
            				]
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_Box.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 10px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_Box.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 10px")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxS.png')")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxS.png')")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxD.png')")
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
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/chk_WF_Toggle.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/chk_WF_Toggle.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/chk_WF_ToggleS.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/chk_WF_ToggleS.png\")")
            								},
            								"mouseover_selected" :
            								{
            									"icon" : nexacro.UrlObject("url(\"theme://mobile/chk_WF_ToggleS.png\")")
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
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_Box.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 10px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxS.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxS.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxD.png')")
            							},
            							"readonly" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chks_WF_ItemR.png')")
            							},
            							"readonly_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chks_WF_ItemRS.png')")
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
            												"icon" : nexacro.UrlObject("url('theme://mobile/mcbo_WF_Chkset.png')"),
            												"padding" : nexacro.PaddingObject("10px"),
            												"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            											},
            											"selected" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxS.png')")
            											},
            											"readonly" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/chks_WF_ItemR.png')")
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
            								"icon" : nexacro.UrlObject("url('theme://mobile/rdo_WF_Item.png')"),
            								"padding" : nexacro.PaddingObject("0px 10px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/rdo_WF_ItemS.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/rdo_WF_ItemS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/rdo_WF_ItemS.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/rdo_WF_ItemD.png')")
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
            								"icon" : nexacro.UrlObject("url('theme://mobile/cbo_WF_Drop.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/cbo_WF_Drop.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/cbo_WF_Drop.png')")
            							}
            						}
            					},
            					"MultiCombo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/mcbo_WF_Drop.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/mcbo_WF_Drop.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/mcbo_WF_DropD.png')")
            							}
            						}
            					},
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_Drop.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_Drop.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_Drop.png')")
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
            									"disabled" :
            									{
            									},
            									"invalid" :
            									{
            									},
            									"valid" :
            									{
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
            										"icon" : nexacro.UrlObject("url('theme://mobile/cbo_WF_Drop.png')")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/cbo_WF_Drop.png')")
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
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_Drop.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_Drop.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_Drop.png')")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_Drop.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_Drop.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_Drop.png')")
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
            										"icon" : nexacro.UrlObject("url('theme://mobile/mcbo_WF_Drop.png')")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/mcbo_WF_Drop.png')")
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
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
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
            										"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
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
            										"icon" : nexacro.UrlObject("url('theme://mobile/mcbo_WF_SelAll.png')"),
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            										"padding" : nexacro.PaddingObject("10px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/mcbo_WF_SelAllS.png')")
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
            								"padding" : nexacro.PaddingObject("8px")
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
            										"padding" : nexacro.PaddingObject("8px 8px 8px 17px")
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
            												"padding" : nexacro.PaddingObject("5px 8px")
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
            												"icon" : nexacro.UrlObject("url('theme://mobile/mcbo_WF_TagBtn.png')"),
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
            														"icon" : nexacro.UrlObject("url('theme://mobile/mcbo_WF_TagBtn.png')"),
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
            														"icon" : nexacro.UrlObject("url('theme://mobile/mcbo_WF_TagBtn.png')"),
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
            								"border" : nexacro.BorderObject("0px none,0px none,2px solid #d6dfe2"),
            								"padding" : nexacro.PaddingObject("10px"),
            								"color" : nexacro.ColorObject("#d6dfe2")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,2px solid #d6dfe2"),
            								"padding" : nexacro.PaddingObject("10px"),
            								"color" : nexacro.ColorObject("#d6dfe2")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,2px solid #2f59bf"),
            								"color" : nexacro.ColorObject("#555555"),
            								"padding" : nexacro.PaddingObject("10px")
            							}
            						}
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
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
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
            								"icon" : nexacro.UrlObject("url('theme://mobile/tab_WF_NextBtn.png')"),
            								"padding" : nexacro.PaddingObject("15px 8px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/tab_WF_NextBtn.png')"),
            								"padding" : nexacro.PaddingObject("15px 8px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/tab_WF_NextBtnD.png')")
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
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_NextBtn.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_NextBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_NextBtn.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_NextBtn.png')")
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
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Nextbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Nextbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Nextbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Nextbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Nextbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Nextbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Nextbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Nextbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Nextbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
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
            								"icon" : nexacro.UrlObject("url('theme://mobile/tab_WF_PrevBtn.png')"),
            								"padding" : nexacro.PaddingObject("15px 8px")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/tab_WF_PrevBtn.png')"),
            								"padding" : nexacro.PaddingObject("15px 8px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/tab_WF_PrevBtnD.png')")
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
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_PrevBtn.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_PrevBtn.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_PrevBtn.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_PrevBtn.png')")
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
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Prevbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Prevbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Prevbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Prevbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Prevbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Prevbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Prevbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Prevbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Prevbtn.png')"),
            														"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
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
            										"icon" : nexacro.UrlObject("url('theme://mobile/tab_WF_ExtraBtn.png')"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/tab_WF_ExtraBtnS.png')"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
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
            												"font" : nexacro.FontObject("0.9rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            												"color" : nexacro.ColorObject("#ffffff")
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
            												"font" : nexacro.FontObject("0.9rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
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
            			"spindownbutton" :
            			{
            				"parent" :
            				{
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
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpndnBtn.png')"),
            												"padding" : nexacro.PaddingObject("0px 0px 3px 0px")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpndnBtn.png')"),
            												"padding" : nexacro.PaddingObject("0px 0px 3px 0px")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpndnBtn.png')"),
            												"padding" : nexacro.PaddingObject("0px 0px 3px 0px")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpndnBtn.png')"),
            												"padding" : nexacro.PaddingObject("0px 0px 3px 0px")
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
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpndnBtn.png')"),
            												"padding" : nexacro.PaddingObject("0px 0px 3px 0px")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpndnBtn.png')"),
            												"padding" : nexacro.PaddingObject("0px 0px 3px 0px")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpndnBtn.png')"),
            												"padding" : nexacro.PaddingObject("0px 0px 3px 0px")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpndnBtn.png')"),
            												"padding" : nexacro.PaddingObject("0px 0px 3px 0px")
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
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpnupBtn.png')"),
            												"padding" : nexacro.PaddingObject("3px 0px 0px 0px")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpnupBtn.png')"),
            												"padding" : nexacro.PaddingObject("3px 0px 0px 0px")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpnupBtn.png')"),
            												"padding" : nexacro.PaddingObject("3px 0px 0px 0px")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpnupBtn.png')"),
            												"padding" : nexacro.PaddingObject("3px 0px 0px 0px")
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
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpnupBtn.png')"),
            												"padding" : nexacro.PaddingObject("3px 0px 0px 0px")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpnupBtn.png')"),
            												"padding" : nexacro.PaddingObject("3px 0px 0px 0px")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpnupBtn.png')"),
            												"padding" : nexacro.PaddingObject("3px 0px 0px 0px")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://mobile/cal_WF_SpnupBtn.png')"),
            												"padding" : nexacro.PaddingObject("3px 0px 0px 0px")
            											}
            										}
            									}
            								}
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
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
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
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
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
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
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
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
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
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
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
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
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
            										"border" : nexacro.BorderObject("1px solid #c6c6c6")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c6c6c6")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c6c6c6")
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
            										"border" : nexacro.BorderObject("1px solid #c6c6c6")
            									}
            								}
            							},
            							"DateRangePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c6c6c6")
            									}
            								}
            							},
            							"PopupDateRangePicker" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c6c6c6")
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
            														"border" : nexacro.BorderObject("0px none,0px none,1px solid #c6c6c6")
            													}
            												}
            											},
            											"DateRangePickerControl" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("0px none,0px none,1px solid #c6c6c6")
            													}
            												}
            											},
            											"PopupDateRangePicker" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("0px none,0px none,1px solid #c6c6c6")
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
            								"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Datetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Datetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Datetab.png')"),
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
            								"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Datetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Datetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Datetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"datetimepicker" :
            					{
            						"parent" :
            						{
            							"DateField" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Datetab.png')")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Datetab.png')")
            									}
            								}
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
            								"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Timetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Timetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Timetab.png')"),
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
            								"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Timetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Timetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Timetab.png')"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					},
            					"datetimepicker" :
            					{
            						"parent" :
            						{
            							"DateField" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Timetab.png')")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/dtrp_WF_Timetab.png')")
            									}
            								}
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
            								"font" : nexacro.FontObject("1rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            								"padding" : nexacro.PaddingObject("2px 0px 0px 0px")
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
            								"font" : nexacro.FontObject("1rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            								"padding" : nexacro.PaddingObject("2px 0px 0px 0px")
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
            								"padding" : nexacro.PaddingObject("0px 0px 2px 0px"),
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
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
            								"padding" : nexacro.PaddingObject("0px 0px 2px 0px"),
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
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
            										"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            									},
            									"selected" :
            									{
            										"font" : nexacro.FontObject("0.9rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
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
            										"font" : nexacro.FontObject("0.9rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
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
            										"font" : nexacro.FontObject("0.9rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
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
            										"font" : nexacro.FontObject("0.9rem \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
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
            								"border" : nexacro.BorderObject("1px solid #c6c6c6"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e4e4e4"),
            								"color" : nexacro.ColorObject("#8e8e8e")
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
            								"border" : nexacro.BorderObject("1px solid #eb003b"),
            								"color" : nexacro.ColorObject("#555555")
            							},
            							"valid" :
            							{
            								"border" : nexacro.BorderObject("1px solid #008a1e"),
            								"color" : nexacro.ColorObject("#555555")
            							}
            						}
            					},
            					"TextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c6c6c6"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e4e4e4"),
            								"color" : nexacro.ColorObject("#8e8e8e")
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
            								"border" : nexacro.BorderObject("1px solid #eb003b")
            							},
            							"valid" :
            							{
            								"border" : nexacro.BorderObject("1px solid #008a1e")
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
            											"border" : nexacro.BorderObject("0px none,0px none,2px solid #002795"),
            											"font" : nexacro.FontObject("1rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,2px solid #f9ac19")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,2px solid #f9ac19")
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
            											"border" : nexacro.BorderObject("0px none,0px none,2px solid #002795"),
            											"font" : nexacro.FontObject("1rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,2px solid #f9ac19")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none,0px none,2px solid #f9ac19")
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
            								"border" : nexacro.BorderObject("1px solid #c6c6c6"),
            								"padding" : nexacro.PaddingObject("10px"),
            								"wordWrap" : "char",
            								"font" : nexacro.FontObject("1rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
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
            								"border" : nexacro.BorderObject("1px solid #e4e4e4"),
            								"color" : nexacro.ColorObject("#8e8e8e")
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
            								"color" : nexacro.ColorObject("#c6c6c6"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							}
            						}
            					},
            					"TextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#c6c6c6"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
            							}
            						}
            					},
            					"MultiLineTextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#c6c6c6"),
            								"padding" : nexacro.PaddingObject("10px")
            							}
            						}
            					}
            				}
            			},
            			"datetimepicker" :
            			{
            				"parent" :
            				{
            					"DateField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c6c6c6")
            							}
            						}
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
            										"color" : nexacro.ColorObject("#c6c6c6"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
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
            										"color" : nexacro.ColorObject("#c6c6c6"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 16px")
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
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            								"color" : nexacro.ColorObject("#666666"),
            								"padding" : nexacro.PaddingObject("5px 15px 0px 5px")
            							}
            						}
            					},
            					"MultiLineTextField" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
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
            						"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            						"color" : nexacro.ColorObject("#666666")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#8e8e8e")
            					},
            					"valid" :
            					{
            						"color" : nexacro.ColorObject("#006e18")
            					},
            					"invalid" :
            					{
            						"color" : nexacro.ColorObject("#d50136")
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
            						"padding" : nexacro.PaddingObject("0px 10px"),
            						"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#8e8e8e")
            					},
            					"floating" :
            					{
            						"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
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
            						"color" : nexacro.ColorObject("#d50136"),
            						"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            						"padding" : nexacro.PaddingObject("2px 5px")
            					},
            					"floatingvalid" :
            					{
            						"color" : nexacro.ColorObject("#006e18"),
            						"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            						"padding" : nexacro.PaddingObject("2px 5px")
            					}
            				}
            			},
            			"FlexTextControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            						"color" : nexacro.ColorObject("#666666"),
            						"padding" : nexacro.PaddingObject("5px 15px 0px 0px")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#8e8e8e")
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
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
            												"border" : nexacro.BorderObject("0px none,0px none,1px solid #c7c7c7"),
            												"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            												"color" : nexacro.ColorObject("#555555")
            											}
            										}
            									}
            								}
            							},
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
            												"border" : nexacro.BorderObject("0px none,0px none,1px solid #dddddd"),
            												"font" : nexacro.FontObject("0.9rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("0px none,0px none,1px solid #dddddd"),
            												"font" : nexacro.FontObject("0.9rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            											},
            											"selected" :
            											{
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_MF_SlideMnu" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none,0px none,1px solid #4d65a0"),
            															"font" : nexacro.FontObject("0.9rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            															"color" : nexacro.ColorObject("#ffffff")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none,0px none,1px solid #4d65a0"),
            															"font" : nexacro.FontObject("0.9rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            															"color" : nexacro.ColorObject("#ffffff")
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											},
            											{
            												"grd_MLM_Mnu" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("3px"),
            															"color" : nexacro.ColorObject("#ffffff")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("3px"),
            															"color" : nexacro.ColorObject("#ffffff")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff")
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_Tree" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"font" : nexacro.FontObject("0.9rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"font" : nexacro.FontObject("0.9rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"font" : nexacro.FontObject("0.9rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
            														}
            													}
            												}
            											}
            										]
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
            												"border" : nexacro.BorderObject("1px solid #d8d8d8,0px none,0px none,0px none"),
            												"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
            												"color" : nexacro.ColorObject("#555555")
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
            													"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont")
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
            													"font" : nexacro.FontObject("0.8rem/150%  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont")
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
            													"font" : nexacro.FontObject("0.8rem  \"NotoSansKR-Bold\", -apple-system, BlinkMacSystemFont"),
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
            													"font" : nexacro.FontObject("0.8rem/150%  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
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
            						"cell_WF_Level0" :
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
            															"grd_WF_Tree" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none,0px none,2px solid #002795,0px none"),
            																		"color" : nexacro.ColorObject("#ffffff")
            																	},
            																	"mouseover" :
            																	{
            																		"border" : nexacro.BorderObject("0px none,0px none,2px solid #002795,0px none"),
            																		"color" : nexacro.ColorObject("#ffffff")
            																	},
            																	"selected" :
            																	{
            																		"border" : nexacro.BorderObject("0px none,0px none,2px solid #002795,0px none"),
            																		"color" : nexacro.ColorObject("#ffffff")
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
            						"cell_WF_Level1" :
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
            															"grd_WF_Tree" :
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
            																	"selected" :
            																	{
            																		"border" : nexacro.BorderObject("0px none")
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
            				]
            			},
            			"vscrollindicator" :
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
            										"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_Box.png')")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxS.png')")
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
            										"icon" : nexacro.UrlObject("url('theme://mobile/grd_WF_BtnTreeColl.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/grd_WF_BtnTreeExpand.png')")
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
            																"grd_WF_Tree" :
            																{
            																	"self" :
            																	{
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://mobile/grd_WF_TreeColl.png')")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://mobile/grd_WF_TreeExpand.png')")
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
            										"icon" : nexacro.UrlObject("url('theme://mobile/grd_WF_ImgTreeColl.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/grd_WF_ImgTreeExpand.png')")
            									},
            									"leaf" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/grd_WF_ImgTreeLeaf.png')")
            									}
            								}
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
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_Box.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_Box.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxS.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxD.png')")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_Box.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_Box.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxS.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/chk_WF_BoxD.png')")
            							}
            						}
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
            								"border" : nexacro.BorderObject("1px solid #17a2b8"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #138496")
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
            								"border" : nexacro.BorderObject("1px solid #17a2b8"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #138496")
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
            								"icon" : nexacro.UrlObject("url('theme://mobile/rdo_WF_Item.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/rdo_WF_Item.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/rdo_WF_ItemS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://mobile/rdo_WF_ItemS.png')")
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
            								"icon" : nexacro.UrlObject("url('theme://mobile/grd_WF_CellExp.png')")
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
            										"icon" : nexacro.UrlObject("url('theme://mobile/lstv_WF_BarCollbtn.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://mobile/lstv_WF_BarExpbtn.png')")
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
            										"enabled" :
            										{
            											"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            											"padding" : nexacro.PaddingObject("0px 2px")
            										},
            										"floating" :
            										{
            											"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            											"padding" : nexacro.PaddingObject("2px 5px")
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
            											"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            											"padding" : nexacro.PaddingObject("0px 2px")
            										},
            										"floating" :
            										{
            											"font" : nexacro.FontObject("0.7rem  \"NotoSansKR-Regular\", -apple-system, BlinkMacSystemFont"),
            											"padding" : nexacro.PaddingObject("2px 5px")
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
