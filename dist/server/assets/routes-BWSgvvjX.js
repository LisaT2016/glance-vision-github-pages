import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Check, Eye, Gauge, ShieldCheck, Wrench } from "lucide-react";
//#region src/components/join-link.tsx
var JOIN_URL = "https://forms.gle/3zq37zf24gpu8zuFA";
function JoinLink({ compact = false }) {
	return /* @__PURE__ */ jsxs("a", {
		href: JOIN_URL,
		target: "_blank",
		rel: "noreferrer",
		className: compact ? "join-link join-link-compact" : "join-link",
		children: [/* @__PURE__ */ jsx("span", { children: "Join" }), /* @__PURE__ */ jsx(ArrowUpRight, {
			"aria-hidden": "true",
			className: "h-4 w-4 shrink-0",
			strokeWidth: 2.5
		})]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var cityTrafficUrl = `/gvweb2026/images/citytraffic.jpg`;
var sideMirrorUrl = `/gvweb2026/images/sidemirror.jpg`;
var snowUrl = `/gvweb2026/images/snow.jpg`;
var sunsetUrl = `/gvweb2026/images/sunset.jpg`;
var trafficUrl = `/gvweb2026/images/traffic.jpg`;
function Index() {
	return /* @__PURE__ */ jsxs("main", {
		className: "overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx("header", {
				className: "absolute inset-x-0 top-0 z-20 border-b border-hero-foreground/20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:h-24 sm:px-8 lg:px-12",
					children: [/* @__PURE__ */ jsxs("a", {
						href: "#top",
						className: "min-w-0 font-display text-xl font-bold text-hero-foreground sm:text-2xl",
						children: ["Glance ", /* @__PURE__ */ jsx("span", {
							className: "text-accent",
							children: "Vision"
						})]
					}), /* @__PURE__ */ jsx(JoinLink, { compact: true })]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "top",
				className: "hero-section relative flex min-h-[720px] items-end sm:min-h-[760px]",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: sideMirrorUrl,
						alt: "Heavy traffic visible in a truck side mirror at sunset",
						className: "absolute inset-0 h-full w-full object-cover object-[54%_center]"
					}),
					/* @__PURE__ */ jsx("div", { className: "hero-overlay absolute inset-0" }),
					/* @__PURE__ */ jsx("div", {
						className: "relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-4xl",
							children: [
								/* @__PURE__ */ jsxs("p", {
									className: "mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm",
									children: [/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-accent" }), " Built for Class 6 fleets"]
								}),
								/* @__PURE__ */ jsx("h1", {
									className: "max-w-4xl font-display text-5xl font-bold leading-[0.98] text-hero-foreground sm:text-7xl lg:text-8xl",
									children: "Real-time blind spot alerts for truck drivers."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-7 max-w-2xl text-lg leading-relaxed text-hero-muted sm:text-xl",
									children: "A digital safety kit that your fleet can self-install, without taking trucks out of service for lengthy professional installation."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-9",
									children: /* @__PURE__ */ jsx(JoinLink, {})
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-primary py-20 text-primary-foreground sm:py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "section-kicker text-accent",
						children: "The risk is already on the road"
					}), /* @__PURE__ */ jsx("h2", {
						className: "section-title mt-4 max-w-xl",
						children: "Blind spots put your drivers and business in a difficult position."
					})] }), /* @__PURE__ */ jsxs("div", {
						className: "grid gap-7 border-l border-primary-foreground/25 pl-6 sm:pl-10",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-xl leading-relaxed text-primary-foreground/80 sm:text-2xl",
							children: "Class 6 trucks have severe blind spots. In dense Chicagoland traffic, what a driver cannot see can quickly become an accident."
						}), /* @__PURE__ */ jsx("p", {
							className: "text-base leading-relaxed text-primary-foreground/65 sm:text-lg",
							children: "Without Glance Vision, truckers risk continued exposure to collisions, liability, and avoidable downtime. Conventional installations can keep a working truck off the road longer than your fleet can afford."
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-20 sm:py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-12 lg:grid-cols-2 lg:items-end",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "section-kicker text-secondary",
								children: "The Glance Vision kit"
							}), /* @__PURE__ */ jsx("h2", {
								className: "section-title mt-4",
								children: "Clear alerts. Practical installation."
							})] }), /* @__PURE__ */ jsx("p", {
								className: "max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end",
								children: "Give drivers added awareness without needing to schedule every truck for a time-consuming professional installation."
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3",
							children: [
								{
									icon: Eye,
									title: "Real-time alerts",
									text: "Digital blind spot alerts help drivers recognize what is beside the truck while they are on the road."
								},
								{
									icon: Wrench,
									title: "Self-install design",
									text: "The user can install the device, reducing dependence on a lengthy professional installation process."
								},
								{
									icon: Gauge,
									title: "Fleet-ready approach",
									text: "Designed for fleet owners and managers who need additional safety measures without extended downtime."
								}
							].map(({ icon: Icon, title, text }, index) => /* @__PURE__ */ jsxs("article", {
								className: "bg-background p-7 sm:p-9",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "mb-10 flex items-center justify-between",
										children: [/* @__PURE__ */ jsx(Icon, {
											className: "h-7 w-7 text-secondary",
											"aria-hidden": "true"
										}), /* @__PURE__ */ jsxs("span", {
											className: "font-mono text-xs text-muted-foreground",
											children: ["0", index + 1]
										})]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "font-display text-2xl font-bold",
										children: title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-4 leading-relaxed text-muted-foreground",
										children: text
									})
								]
							}, title))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]",
							children: [/* @__PURE__ */ jsx("img", {
								src: snowUrl,
								alt: "Class 6 trucks traveling on a winter highway",
								className: "h-full min-h-80 w-full object-cover",
								loading: "lazy"
							}), /* @__PURE__ */ jsxs("div", {
								className: "bg-muted p-7 sm:p-10",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "section-kicker text-secondary",
										children: "What changes"
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "mt-4 font-display text-3xl font-bold sm:text-4xl",
										children: "More awareness without a long stop in the shop."
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "mt-8 space-y-5",
										children: [
											"Drivers receive added visibility where mirrors fall short.",
											"Your team installs the kit around fleet schedules and at your convenience.",
											"Working trucks spend less time waiting for outside installation."
										].map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex gap-4 text-base leading-relaxed text-muted-foreground",
											children: [/* @__PURE__ */ jsx(Check, {
												className: "mt-1 h-5 w-5 shrink-0 text-secondary",
												"aria-hidden": "true"
											}), /* @__PURE__ */ jsx("span", { children: item })]
										}, item))
									})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative min-h-[580px] overflow-hidden py-24 sm:py-32",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: sunsetUrl,
						alt: "Heavy-duty trucks traveling at sunset",
						className: "absolute inset-0 h-full w-full object-cover",
						loading: "lazy"
					}),
					/* @__PURE__ */ jsx("div", { className: "story-overlay absolute inset-0" }),
					/* @__PURE__ */ jsx("div", {
						className: "relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-2xl text-hero-foreground",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "section-kicker text-accent",
									children: "Why Glance Vision"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "section-title mt-4",
									children: "Three years focused on safer views from the cab."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-7 text-lg leading-relaxed text-hero-muted",
									children: "We work with fleet owners and managers who understand the daily pressure of keeping drivers safe and trucks moving. Glance Vision is a participant in the 2026 mPOWER program at mHUB Chicago."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-10 grid max-w-lg grid-cols-2 gap-px bg-hero-foreground/25",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "bg-primary/80 p-6 backdrop-blur-sm",
										children: [/* @__PURE__ */ jsx("p", {
											className: "font-display text-4xl font-bold text-accent",
											children: "3"
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-2 text-sm text-hero-muted",
											children: "Years in business"
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "bg-primary/80 p-6 backdrop-blur-sm",
										children: [/* @__PURE__ */ jsx(ShieldCheck, {
											className: "h-9 w-9 text-accent",
											"aria-hidden": "true"
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-3 text-sm text-hero-muted",
											children: "Built for fleet operators"
										})]
									})]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-20 sm:py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ jsx("p", {
							className: "section-kicker text-secondary",
							children: "Early access"
						}), /* @__PURE__ */ jsx("h2", {
							className: "section-title mt-4",
							children: "A straightforward path to get involved."
						})]
					}), /* @__PURE__ */ jsx("ol", {
						className: "mt-12 grid gap-8 md:grid-cols-3",
						children: [
							[
								"01",
								"Sign Up for the Mailer List",
								"Stay informed as the Glance Vision kit moves forward."
							],
							[
								"02",
								"Share Your Insights",
								"Tell us what your fleet and drivers need from blind spot alerts."
							],
							[
								"03",
								"Get Early Access",
								"Be among the first fleet teams considered for access."
							]
						].map(([number, title, text]) => /* @__PURE__ */ jsxs("li", {
							className: "border-t-2 border-secondary pt-6",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-mono text-sm font-bold text-secondary",
									children: number
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-8 font-display text-2xl font-bold",
									children: title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 leading-relaxed text-muted-foreground",
									children: text
								})
							]
						}, number))
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "grid min-h-[620px] lg:grid-cols-2",
				children: [/* @__PURE__ */ jsx("div", {
					className: "relative min-h-80 overflow-hidden lg:min-h-full",
					children: /* @__PURE__ */ jsx("img", {
						src: trafficUrl,
						alt: "Heavy trucks in wet highway traffic",
						className: "absolute inset-0 h-full w-full object-cover",
						loading: "lazy"
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "flex items-center bg-secondary px-5 py-20 text-secondary-foreground sm:px-12 lg:px-16",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "section-kicker text-accent",
								children: "Keep your fleet moving"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "section-title mt-4",
								children: "Help shape a blind spot kit for working fleets."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 text-lg leading-relaxed text-secondary-foreground/80",
								children: "Join the mailer list, share what matters to your operation, and be considered for early access."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-9",
								children: /* @__PURE__ */ jsx(JoinLink, {})
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "bg-primary text-primary-foreground",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:px-8 lg:px-12",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
						className: "font-display text-2xl font-bold",
						children: ["Glance ", /* @__PURE__ */ jsx("span", {
							className: "text-accent",
							children: "Vision"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/60",
						children: "Real-time blind spot alerts for heavy-duty truck fleets."
					})] }), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-primary-foreground/60",
						children: "Chicago, Illinois · Contact through the Join form"
					})]
				}), /* @__PURE__ */ jsx("img", {
					src: cityTrafficUrl,
					alt: "Chicagoland highway traffic beneath the city skyline",
					className: "h-40 w-full object-cover object-[center_68%] opacity-55",
					loading: "lazy"
				})]
			})
		]
	});
}
//#endregion
export { Index as component };
