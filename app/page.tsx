'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'Insurance' | 'Home Services' | 'Medical'>('Insurance');

  // Interactive Map State & Card info matching the exact requirement
  const [cardData, setCardData] = useState({
    state: '',
    campaign: '',
    buyer: '',
    time: ''
  });
  const [showCard, setShowCard] = useState(false);
  const [cardPos, setCardPos] = useState({ x: 0, y: 0 });
  const [rowVisible, setRowVisible] = useState([false, false, false, false]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const generateCallsData = [
    {
      title: "Search",
      desc: "We work with partners using Google and Bing ads, plus SEO, to drive consumer-initiated inbound phone calls.",
      iconSrc: "/x6.png" 
    },
    {
      title: "Display Ads",
      desc: "We place display ads on relevant third-party sites as image, banner, and text ads to attract users.",
      iconSrc: "/x7.png"
    },
    {
      title: "Social Media",
      desc: "We produce consumer-initiated inbound calls through Facebook, Instagram, Snapchat, and other social platforms.",
      iconSrc: "/x1.png"
    },
    {
      title: "TV & Radio",
      desc: "Our publishers leverage TV, Radio to generate high-quality consumer-initiated inbound calls effectively.",
      iconSrc: "/x2.png"
    },
    {
      title: "Native Ads",
      desc: "Native advertising, known as sponsored content, lets our publishers promote ads on relevant websites to drive calls.",
      iconSrc: "/x3.png",
      link: true
    },
    {
      title: "Transfers",
      desc: "Publishers buy opt-in data or generate leads on websites. Agents qualify each lead before transferring it to buyers.",
      iconSrc: "/x4.png",
      link: true
    },
    {
      title: "Web Form to SMS",
      desc: "Publishers drive traffic to Basile via Google, Bing, social, native, display ads. Consumers fill forms, then receive SMS",
      iconSrc: "/x5.png",
      link: true
    }
  ];

  const verticalsData = {
    Insurance: [
      { title: "Auto Insurance", href: "/insurance/auto", icon: "/v1.png" },
      { title: "Health Insurance", href: "/insurance/health", icon: "/v2.png" },
      { title: "Homeowners Insurance", href: "/insurance/homeowners", icon: "/v3.png" },
      { title: "ACA Insurance", href: "/insurance/aca", icon: "/v4.png" },
      { title: "Medicare Insurance", href: "/insurance/medicare", icon: "/v5.png" },
      { title: "Final Expense Insurance", href: "/insurance/final-expense", icon: "/v6.png" },
    ],
    "Home Services": [
      { title: "Appliance Repair Pros", href: "/home-services/appliance-repair", icon: "/s.jpeg" },
      { title: "Electricians", href: "/home-services/electricians", icon: "/ss.jpeg" },
      { title: "HVAC Contractors", href: "/home-services/hvac", icon: "/s3.jpeg" },
      { title: "Landscapers", href: "/home-services/landscapers", icon: "/s4.jpeg" },
      { title: "Locksmiths", href: "/home-services/locksmiths", icon: "/s5.jpeg" },
      { title: "Pest Control", href: "/home-services/pest-control", icon: "/s6.jpeg" },
      { title: "Plumbers", href: "/home-services/plumbers", icon: "/s7.jpeg" },
      { title: "Roofers", href: "/home-services/roofers", icon: "/s8.jpeg" },
    ],
    Medical: [
      { title: "Chiropractors", href: "/medical/chiropractors", icon: "/cx1.jpeg" },
      { title: "Dentists", href: "/medical/dentists", icon: "/cx2.jpeg" },
      { title: "Drug & Alcohol Addiction Treatment", href: "/medical/addiction-treatment", icon: "/cx3.jpeg" },
    ]
  };

  const faqData = [
    {
      question: "Is Pay-Per-Call better than traditional digital leads?",
      answer: "With Pay-Per-Call, you're not chasing leads – they call you. Unlike form leads or clicks, inbound calls have higher intent, faster close rates, and better ROI. You're speaking directly to motivated customers in real time."
    },
    {
      question: "Can I scale my campaigns as I grow?",
      answer: "Yes! Whether you want 10 calls a day or 500, we can scale with your demand. Our network and traffic sources are optimized to grow your campaign without sacrificing call quality."
    },
    {
      question: "Do I get exclusive calls or shared leads?",
      answer: "All calls from AFFCALL are 100% exclusive to you. We do not resell or recycle calls. You get full control over the customer interaction from the very first ring."
    },
    {
      question: "How do I track performance and ROI?",
      answer: "You'll have access to a real-time dashboard showing call recordings, durations, caller info, and conversion metrics. We believe in full transparency – so you always know where your budget is going and what's working."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % generateCallsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [generateCallsData.length]);

  // Exact Globe & Animation Engine from Buyer's file
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const D = Math.PI / 180;
    const land = [
      [[-9,37],[-9,43],[-2,43.5],[-1.5,46],[-4.5,48.5],[2,51],[8,54],[8,57],[10.5,57.7],[10.5,54.5],[14,54],[20,54.5],[23,59],[30,60],[24,60],[22,63.5],[25,65.5],[18,63],[17.5,60],[16,56.5],[12.5,56],[11,59],[5.5,58.5],[5,62],[14,67.5],[25,71],[40,68],[44,66],[60,69],[70,73],[100,77],[140,72],[180,69],[180,64],[163,59],[156,51],[142,53],[140,48],[135,43],[129,41],[128,35],[125,38],[121,40],[122,37],[119,35],[121,31],[122,29],[118,24],[110,21],[108,18],[109,12],[105,9],[101,13],[100,8],[103,2],[100,4],[98,9],[98,16],[94,17],[92,22],[88,22],[87,20],[80,15],[80,10],[77,8],[73,17],[72,21],[68,23],[66,25],[58,25.5],[56,27],[52,28],[48,30],[50,26],[52,24],[56,26],[57,23],[59,22],[55,17],[45,13],[43,15],[39,21],[35,28],[34,31],[36,36],[30,36.5],[27,37],[24,38],[22,36.5],[21,39],[19,42],[14,45],[12.5,44],[16,41],[16,38],[15.5,40],[12,42],[9,44.5],[6,43],[3,43],[0.5,38.5],[-2,37],[-5.5,36]],
      [[-17,21],[-13,28],[-6,35.8],[10,37],[11,33],[20,32],[32,31],[34,27],[38,20],[43,12],[51,12],[47,5],[40,-3],[39,-10],[41,-15],[35,-25],[32,-29],[27,-34],[20,-35],[17,-30],[12,-18],[13,-8],[9,-1],[9,4],[4,6],[-8,4],[-13,8],[-17,14]],
      [[-5,50],[1.5,51],[1.5,53],[-1,55],[-2,57.5],[-5,58.5],[-6,56],[-3,54.5],[-5,52]],
      [[-10,52],[-6,52],[-6,55],[-10,54]],
      [[44,-25],[47,-25],[50,-15],[49,-12],[44,-17]],
      [[130,31],[135,34],[140,35],[141,41],[142,45],[140,41],[138,37],[132,35]],
      [[95,5],[98,4],[106,-6],[104,-5],[95,2]],
      [[109,1],[117,7],[119,1],[116,-4],[110,-3]],
      [[114,-22],[122,-18],[130,-12],[136,-12],[137,-16],[142,-11],[146,-19],[153,-27],[151,-34],[147,-39],[140,-38],[135,-35],[130,-32],[124,-34],[115,-34]],
      [[-78,8],[-60,10],[-35,-6],[-40,-22],[-58,-38],[-68,-54],[-75,-45],[-72,-20],[-81,-5]],
      [[-168,66],[-140,70],[-95,72],[-80,68],[-60,55],[-55,48],[-70,42],[-80,30],[-97,25],[-88,17],[-78,8],[-105,20],[-118,32],[-125,42],[-125,50],[-140,60]]
    ];
    const hub = [10, 49];
    const allCalls = [
      {lon:-97.7,lat:30.3,st:'Texas',id:'+1 (512) 555-0187',b:'SolarPeak Home Energy',r:'Priority · $42.00'},
      {lon:-105,lat:39.7,st:'Colorado',id:'+1 (303) 555-0164',b:'ClearShield Insurance',r:'Round robin · $28.50'},
      {lon:-80.2,lat:25.8,st:'Florida',id:'+1 (305) 555-0129',b:'Bright Path Legal',r:'Highest bid · $65.00'},
      {lon:-122.3,lat:47.6,st:'Washington',id:'+1 (206) 555-0138',b:'Nova Health Group',r:'Geo route · $19.00'},
      {lon:-87.6,lat:41.9,st:'Illinois',id:'+1 (312) 555-0172',b:'Harbor Home Loans',r:'Priority route · $36.00'},
      {lon:-74,lat:40.7,st:'New York',id:'+1 (212) 555-0156',b:'PayWise Financial',r:'Round robin · $24.00'},
      {lon:-112,lat:33.4,st:'Arizona',id:'+1 (602) 555-0113',b:'Summit Auto Group',r:'Highest bid · $48.00'},
      {lon:-84.4,lat:33.7,st:'Georgia',id:'+1 (404) 555-0191',b:'EduBridge Online',r:'Geo route · $31.00'},
      {lon:-118.2,lat:34.1,st:'California'},{lon:-122.7,lat:45.5,st:'Oregon'},{lon:-93.3,lat:45,st:'Minnesota'},{lon:-86.8,lat:36.2,st:'Tennessee'},
      {lon:-83,lat:40,st:'Ohio'},{lon:-90.1,lat:30,st:'Louisiana'},{lon:-71.1,lat:42.4,st:'Massachusetts'},{lon:-111.9,lat:40.8,st:'Utah'},
      {lon:-0.1,lat:51.5,st:'Nevada'},{lon:13.4,lat:52.5,st:'Michigan'},{lon:3.4,lat:6.5,st:'Pennsylvania'},{lon:31.2,lat:30,st:'Virginia'},
      {lon:37.6,lat:55.8,st:'North Carolina'},{lon:55.3,lat:25.2,st:'Indiana'},{lon:77.2,lat:28.6,st:'Wisconsin'},{lon:72.9,lat:19.1,st:'Missouri'},
      {lon:103.8,lat:1.4,st:'Oklahoma'},{lon:116.4,lat:39.9,st:'Alabama'},{lon:139.7,lat:35.7,st:'Kentucky'},{lon:151.2,lat:-33.9,st:'Maryland'},
      {lon:28,lat:-26.2,st:'New Jersey'},{lon:-46.6,lat:-23.5,st:'South Carolina'}
    ];
    const AB=['TX','CO','FL','WA','IL','NY','AZ','GA','CA','OR','MN','TN','OH','LA','MA','UT','NV','MI','PA','VA','NC','IN','WI','MO','OK','AL','KY','MD','NJ','SC'];
    const CP=['Solar Leads','Home Insurance','Personal Injury','Medicare Plans','Home Loans','Debt Relief','Auto Warranty','Online Degrees','Legal Intake','Roofing Quotes','Tax Relief','Senior Care','Solar Install','Mortgage Refi','Auto Loans','Home Security'];
    
    allCalls.forEach((c,i)=>{ c.ab = AB[i]; c.cp = CP[i % CP.length]; });
    const calls = allCalls.filter(c => c.lon > -20);
    const vec = (lo: number, la: number) => {
      const l = lo * D, f = la * D;
      return [Math.cos(f) * Math.sin(l), Math.sin(f), Math.cos(f) * Math.cos(l)];
    };
    calls.forEach((c: any) => c.v = vec(c.lon, c.lat));
    const hv = vec(hub[0], hub[1]);

    let W = 0, H = 0, R = 0, cx = 0, cy = 0;
    let rot = 55, tilt = 0.38;

    const handleResize = () => {
      const r = cv.getBoundingClientRect();
      const d = window.devicePixelRatio || 1;
      W = r.width;
      H = r.height;
      cv.width = W * d;
      cv.height = H * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      R = Math.min(W, H) * 0.22;
      cx = W - R - Math.max(20, W * 0.1);
      cy = H / 2;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const view = (v: number[]) => {
      const r = rot * D, x = v[0] * Math.cos(r) - v[2] * Math.sin(r), z = v[0] * Math.sin(r) + v[2] * Math.cos(r), y = v[1];
      return [cx + R * x, cy - R * (y * Math.cos(tilt) - z * Math.sin(tilt)), y * Math.sin(tilt) + z * Math.cos(tilt)];
    };

    const dense = (p: number[][]) => {
      const o = [];
      for (let i = 0; i < p.length; i++) {
        const a = p[i], b = p[(i + 1) % p.length], n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 2.5));
        for (let k = 0; k < n; k++) o.push(vec(a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n));
      }
      return o;
    };
    const landV = land.map(dense);

    const grid: number[][][] = [];
    for (let lo = 0; lo < 360; lo += 15) { const l = []; for (let la = -90; la <= 90; la += 3) l.push(vec(lo, la)); grid.push(l); }
    for (let la = -75; la <= 75; la += 15) { const l = []; for (let lo = 0; lo <= 360; lo += 3) l.push(vec(lo, la)); grid.push(l); }

    const slerp = (a: number[], b: number[], n = 40) => {
      const ang = Math.acos(Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]))), o = [];
      for (let i = 0; i <= n; i++) {
        const t = i / n, s1 = Math.sin((1 - t) * ang) / Math.sin(ang), s2 = Math.sin(t * ang) / Math.sin(ang), l = 1 + .16 * Math.sin(Math.PI * t) * ang / 1.2;
        o.push([(a[0] * s1 + b[0] * s2) * l, (a[1] * s1 + b[1] * s2) * l, (a[2] * s1 + b[2] * s2) * l]);
      }
      return o;
    };
    const arcsW = calls.map((c: any) => slerp(hv, c.v));

    let cur: number | null = null, t0 = 0, q: number[] = [], last = -1, rel = { dx: 0, dy: 0 };

    const strokeP = (p: number[][], to = 1) => {
      ctx.beginPath();
      let pen = false;
      const m = Math.floor(to * (p.length - 1));
      for (let i = 0; i <= m; i++) {
        const qVal = p[i];
        if (qVal[2] > 0 && Math.hypot(qVal[0] - cx, qVal[1] - cy) < R * 1.03) {
          pen ? ctx.lineTo(qVal[0], qVal[1]) : ctx.moveTo(qVal[0], qVal[1]);
          pen = true;
        } else pen = false;
      }
      ctx.stroke();
    };

    const disk = () => { ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); };

    let animationFrameId: number;

    const nextCall = (now: number) => {
      if (!q.length) {
        q = calls.map((_, i) => i).sort(() => Math.random() - .5);
        if (q[0] === last) q.push(q.shift()!);
      }
      let k = q.findIndex(i => calls[i]?.v && view(calls[i].v)[2] > .3);
      if (k < 0) k = 0;
      const idx = q.splice(k, 1)[0];
      last = idx;
      cur = idx;
      t0 = now;
      const c: any = calls[idx];
      
      setCardData({
        state: c.st,
        campaign: c.cp,
        buyer: c.ab + ' buyer',
        time: (180 + Math.floor(Math.random() * 240)) + ' ms'
      });
      setShowCard(false);
      setRowVisible([false, false, false, false]);

      const o = view(c.v);
      const cw = 210, ch = 90;
      const g = 26 + Math.random() * 30;
      const m = 8;
      const opts: Record<string, [number, number]> = {
        up: [o[0] - cw / 2, o[1] - ch - g],
        down: [o[0] - cw / 2, o[1] + g],
        left: [o[0] - cw - g, o[1] - ch / 2],
        right: [o[0] + g, o[1] - ch / 2]
      };
      let ok = Object.keys(opts).filter(key => {
        const [x, y] = opts[key];
        return x >= m && y >= m && x + cw <= W - m && y + ch <= H - m;
      });
      if (!ok.length) ok = ['down'];
      const s = ok[Math.floor(Math.random() * ok.length)];
      let [x, y] = opts[s];
      if (s === 'up' || s === 'down') x += (Math.random() - .5) * cw * .5;
      else y += (Math.random() - .5) * ch * .5;
      rel.dx = x - o[0];
      rel.dy = y - o[1];
    };

    const frame = (time: number) => {
      const now = time / 1000;
      rot = 55 + 40 * Math.sin(now * 2 * Math.PI / 150);

      ctx.clearRect(0, 0, W, H);
      const u = R / 400;

      // Sphere background gradient
      ctx.save();
      ctx.shadowColor = 'rgba(20,20,50,.25)';
      ctx.shadowBlur = R * 0.14;
      ctx.shadowOffsetY = R * 0.07;
      const g = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R * 1.05);
      g.addColorStop(0, '#fff');
      g.addColorStop(1, '#cdd1d9');
      ctx.fillStyle = g;
      disk();
      ctx.fill();
      ctx.restore();

      // Land & Graticule clipping
      ctx.save();
      disk();
      ctx.clip();

      for (const pv of landV) {
        const pr = pv.map(view);
        if (!pr.some(p => p[2] > 0)) continue;
        const pts = pr.map(p => {
          if (p[2] >= 0) return p;
          const l = Math.hypot(p[0] - cx, p[1] - cy) || 1;
          return [cx + (p[0] - cx) / l * R, cy + (p[1] - cy) / l * R];
        });
        const tr = () => { ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.closePath(); };
        ctx.save();
        ctx.translate(2.2 * u, 3.4 * u);
        ctx.fillStyle = '#8c929d';
        tr();
        ctx.fill();
        ctx.restore();
        ctx.fillStyle = '#f7f8fa';
        tr();
        ctx.fill();
        ctx.strokeStyle = '#8c929d';
        ctx.globalAlpha = .45;
        ctx.lineWidth = Math.max(.8, u);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      ctx.strokeStyle = '#8b909b';
      ctx.lineWidth = Math.max(.6, u * .9);
      ctx.globalAlpha = .55;
      for (const l of grid) {
        const p = l.map(view);
        ctx.beginPath();
        let pen = false;
        for (const qVal of p) {
          if (qVal[2] > 0) {
            pen ? ctx.lineTo(qVal[0], qVal[1]) : ctx.moveTo(qVal[0], qVal[1]);
            pen = true;
          } else pen = false;
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Limb shading
      const sh = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R);
      sh.addColorStop(0, 'rgba(0,0,0,0)');
      sh.addColorStop(1, 'rgba(10,10,40,.2)');
      ctx.fillStyle = sh;
      disk();
      ctx.fill();
      ctx.restore();

      // Dashed Arcs
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);
      ctx.strokeStyle = '#1b1240';
      ctx.globalAlpha = .6;
      arcsW.forEach(a => strokeP(a.map(view)));
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;

      // Dots
      const dr = Math.max(3, u * 3.6);
      calls.forEach((c: any, i) => {
        const p = view(c.v);
        if (p[2] > .02) {
          ctx.fillStyle = i % 2 ? '#e5245d' : '#1b1240';
          ctx.beginPath();
          ctx.arc(p[0], p[1], dr, 0, 7);
          ctx.fill();
        }
      });

      const h = view(hv);
      if (h[2] > 0) {
        ctx.fillStyle = '#1b1240';
        ctx.beginPath();
        ctx.moveTo(h[0], h[1] - dr * 1.7);
        ctx.lineTo(h[0] + dr * 1.4, h[1] + dr);
        ctx.lineTo(h[0] - dr * 1.4, h[1] + dr);
        ctx.fill();
      }

      if (cur === null || now - t0 > 8) {
        nextCall(now);
      }

      const e = now - t0;
      if (cur !== null && calls[cur]) {
        const cItem: any = calls[cur];
        const ap = arcsW[cur].map(view);
        const prog = Math.min(1, e / 1.6);
        const op = view(cItem.v);

        ctx.strokeStyle = '#e5245d';
        ctx.lineWidth = 1.8;
        strokeP(ap, prog);

        if (op[2] > 0) {
          const kAnim = (e % 1.6) / 1.6;
          ctx.globalAlpha = 1 - kAnim;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(op[0], op[1], dr + kAnim * 16 * u + 2, 0, 7);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        if (prog < 1) {
          const p = ap[Math.floor(prog * (ap.length - 1))];
          if (p[2] > 0) {
            ctx.fillStyle = '#e5245d';
            ctx.beginPath();
            ctx.arc(p[0], p[1], dr, 0, 7);
            ctx.fill();
          }
        }

        if (e > 1.6 && e < 7.2 && op[2] > 0) {
          const cw = 210, ch = 90, m = 8;
          const x = Math.max(m, Math.min(W - cw - m, op[0] + rel.dx));
          const y = Math.max(m, Math.min(H - ch - m, op[1] + rel.dy));
          
          setCardPos({ x, y });
          setShowCard(true);

          ctx.strokeStyle = '#e5245d';
          ctx.lineWidth = 1.2;
          ctx.globalAlpha = .8;
          ctx.beginPath();
          ctx.moveTo(op[0], op[1]);
          ctx.lineTo(Math.max(x, Math.min(x + cw, op[0])), Math.max(y, Math.min(y + ch, op[1])));
          ctx.stroke();
          ctx.globalAlpha = 1;

          setRowVisible([
            e > 1.9,
            e > 2.75,
            e > 3.6,
            e > 4.45
          ]);
        } else {
          setShowCard(false);
        }
      }

      animationFrameId = requestAnimationFrame(frame);
    };

    animationFrameId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      
      {/* ==================== MAIN CONTENT ==================== */}
      <main>
        
        {/* 1. Hero Section */}
        <section className="relative bg-cover bg-center bg-no-repeat py-12 lg:py-20 overflow-hidden" style={{ backgroundImage: `url('Sakib.png')` }}>
          <div className="absolute inset-0 bg-white/40 lg:bg-white/30"></div>

          <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
            
            <div className="lg:w-1/2 space-y-6 z-10 backdrop-blur-md bg-white/75 p-6 lg:p-8 rounded-2xl shadow-md border border-white/60">
              
              <div className="bg-orange-50 text-orange-600 font-semibold px-4 py-2 rounded-full text-xs uppercase tracking-wider inline-flex items-center space-x-2 border border-orange-100 shadow-sm">
                <span>Powered by</span>
                <div className="relative w-16 h-4 inline-block" style={{ width: 'auto', height: 'auto' }}>
                  <Image src="/t.webp" alt="Ringba Logo" width={64} height={16} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Enterprise Pay Per <br />
                Call <span className="text-orange-500">Infrastructure.</span>
              </h1>

              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                Scale customer acquisition with <strong>Pay Per Call Program</strong>, intelligent routing, and real-time performance insights.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Pay Per Call</h4>
                    <p className="text-xs text-gray-700">Inbound & outbound call campaigns with real-time routing & Quality scoring.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Cost-Per-Acquisition (CPA)</h4>
                    <p className="text-xs text-gray-700">Data-Driven Campaigns Designed for Conversions & ROI.</p>
                  </div>
                </div>
              </div>

              {/* Updated Buttons Section with Orange Color */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/form/advertiser-register" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>I&apos;m An Advertiser</span>
                  <span>&rarr;</span>
                </Link>
                
                <Link 
                  href="/form/affiliate-register" 
                  className="bg-white hover:bg-orange-50 text-orange-500 border-2 border-orange-500 font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-300 inline-flex items-center space-x-2 text-sm"
                >
                  <span>I&apos;m A Publisher</span>
                  <span>&rarr;</span>
                </Link>
              </div>

            </div>

            {/* Interactive Globe Map Animation Container */}
            <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative w-full h-[380px] sm:h-[450px] lg:h-[500px] z-10">
              <div className="w-full max-w-lg h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900/5 relative">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-pointer" aria-label="Globe showing live calls routed to buyers" />
                
                {/* Exact Buyer File Card Design & Animation Classes */}
                <div 
                  id="card" 
                  style={{ 
                    position: 'absolute', 
                    top: `${cardPos.y}px`, 
                    left: `${cardPos.x}px`,
                    width: 'min(210px, 94%)',
                    padding: '8px 11px 8px',
                    borderRadius: '8px',
                    fontFamily: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
                    fontSize: '10px',
                    lineHeight: '1.6',
                    background: 'linear-gradient(155deg, #fff, #f3f2fb)',
                    border: '1px solid #dcdaf0',
                    boxShadow: '0 1px 0 rgba(255,255,255,.7) inset, 0 1px 0 #c9c6e6, 0 3px 0 #b3afd6, 0 12px 18px -10px rgba(27,18,64,.5)',
                    opacity: showCard ? 1 : 0,
                    transform: showCard ? 'perspective(700px) rotateX(8deg)' : 'perspective(700px) translateY(10px) rotateX(14deg) scale(.9)',
                    transformStyle: 'preserve-3d',
                    transition: 'opacity .6s ease, transform 1s cubic-bezier(.2,1.1,.4,1)',
                    pointerEvents: 'none',
                    zIndex: 20
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '10.5px', letterSpacing: '.02em', marginBottom: '2px', transform: 'translateZ(14px)', color: '#FC6716' }}>INBOUND CALL</div>
                  
                  <div style={{ whiteSpace: 'nowrap', opacity: rowVisible[0] ? 1 : 0, transform: rowVisible[0] ? 'translateZ(10px)' : 'translateX(-6px)', transition: '.7s' }}>
                    <span style={{ color: '#6b7080' }}>caller state:</span> <b style={{ fontWeight: 700, color: '#FC6716' }}>{cardData.state}</b>
                  </div>
                  <div style={{ whiteSpace: 'nowrap', opacity: rowVisible[1] ? 1 : 0, transform: rowVisible[1] ? 'translateZ(10px)' : 'translateX(-6px)', transition: '.7s' }}>
                    <span style={{ color: '#6b7080' }}>campaign:</span> <b style={{ fontWeight: 700, color: '#FC6716' }}>{cardData.campaign}</b>
                  </div>
                  <div style={{ whiteSpace: 'nowrap', opacity: rowVisible[2] ? 1 : 0, transform: rowVisible[2] ? 'translateZ(10px)' : 'translateX(-6px)', transition: '.7s' }}>
                    <span style={{ color: '#6b7080' }}>routed to:</span> <b style={{ fontWeight: 700, color: '#FC6716' }}>{cardData.buyer}</b>
                  </div>
                  <div style={{ whiteSpace: 'nowrap', opacity: rowVisible[3] ? 1 : 0, transform: rowVisible[3] ? 'translateZ(10px)' : 'translateX(-6px)', transition: '.7s' }}>
                    <span style={{ color: '#12a150' }}>connected in</span> <b style={{ fontWeight: 700, color: '#12a150' }}>{cardData.time}</b>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 2. How Affcall Delivers Results */}
        <section className="bg-gray-50 py-12 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">How <span className="text-orange-500">affcall</span> Delivers Results</h2>
            <p className="text-gray-500 text-sm mb-10">A simple process built for performance and scale.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-orange-50/50 hover:border-orange-200 hover:shadow-xl cursor-pointer">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center" style={{ width: 'auto', height: 'auto' }}>
                  <Image src="/i1.png" alt="Create Campaign Icon" width={64} height={64} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Create Campaign</h4>
                <p className="text-xs text-gray-500">Set your targeting, call rules, routing, and budget</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-orange-50/50 hover:border-orange-200 hover:shadow-xl cursor-pointer">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center" style={{ width: 'auto', height: 'auto' }}>
                  <Image src="/hu.png" alt="We Connect Calls Icon" width={64} height={64} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">We Connect Calls</h4>
                <p className="text-xs text-gray-500">Our network connects you with high-intent callers in real-time.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-orange-50/50 hover:border-orange-200 hover:shadow-xl cursor-pointer">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center" style={{ width: 'auto', height: 'auto' }}>
                  <Image src="/hu2.png" alt="Calls Tracked in Ringba Icon" width={64} height={64} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Calls Are Tracked in Ringba</h4>
                <p className="text-xs text-gray-500">Every call is tracked, recorded, and verified on the Ringba platform.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-orange-50/50 hover:border-orange-200 hover:shadow-xl cursor-pointer">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center" style={{ width: 'auto', height: 'auto' }}>
                  <Image src="/hu3.png" alt="Analyze & Optimize Icon" width={64} height={64} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Analyze & Optimize</h4>
                <p className="text-xs text-gray-500">Use real-time reports and insights to optimize performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Cards Grid Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-center text-2xl lg:text-3xl font-extrabold text-gray-900 mb-16">
            Call High-Intent Callers, Real-Time Call Tracking, 24/7 Call Flows.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative group">
              <div>
                <div className="w-full h-36 relative mb-6 flex items-center justify-center" style={{ width: 'auto', height: 'auto' }}>
                  <Image src="/hi1.jpeg" alt="Pay for Qualified Calls" width={200} height={144} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <h3 className="text-xl font-bold text-orange-500 mb-3 text-center">Pay for Qualified Calls</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                  Stop wasting budget on unqualified traffic. Only pay for calls that are qualified and valuable.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative group">
              <div>
                <div className="w-full h-36 relative mb-6 flex items-center justify-center" style={{ width: 'auto', height: 'auto' }}>
                  <Image src="/rt.jpeg" alt="Dedicated client services team" width={200} height={144} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <h3 className="text-xl font-bold text-orange-500 mb-3 text-center">Dedicated client services team</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                  Your dedicated account managers are always here to assist you and drive your campaigns forward.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative group">
              <div>
                <div className="w-full h-36 relative mb-6 flex items-center justify-center" style={{ width: 'auto', height: 'auto' }}>
                  <Image src="/hi.jpeg" alt="Actionable reporting" width={200} height={144} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <h3 className="text-xl font-bold text-orange-500 mb-3 text-center">Actionable reporting</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                  Get real-time insights with advanced call tracking and analytics to make smart, data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Predictable Revenue Section */}
        <section className="bg-gray-50 py-16 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center border flex flex-col items-center">
                <div className="relative w-12 h-12 mb-3" style={{ width: 'auto', height: 'auto' }}>
                  <Image src="/i1.png" alt="Call" width={48} height={48} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <span className="text-xs font-bold">Exclusive Phone Calls</span>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center border flex flex-col items-center">
                <div className="relative w-12 h-12 mb-3" style={{ width: 'auto', height: 'auto' }}>
                  <Image src="/i3.png" alt="Target" width={48} height={48} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <span className="text-xs font-bold">Multiple Campaigns</span>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center border flex flex-col items-center">
                <div className="relative w-12 h-12 mb-3" style={{ width: 'auto', height: 'auto' }}>
                  <Image src="/4e.png" alt="Shield" width={48} height={48} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <span className="text-xs font-bold">Pay Per Results Only</span>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center border flex flex-col items-center">
                <div className="relative w-12 h-12 mb-3" style={{ width: 'auto', height: 'auto' }}>
                  <Image src="/2i.png" alt="Chart" width={48} height={48} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <span className="text-xs font-bold">Realtime Reporting</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Turn Phone Calls Into Predictable Revenue.</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We connect you with consumers actively looking for services through ready-to-buy live inbound calls, directly connected to your sales team.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                You can scale inbound performance with zero upfront costs, turning clicks into paying customers.
              </p>
            </div>
          </div>
        </section>

        {/* 5. OUR Verticals */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">OUR Verticals</h2>
          
          <div className="flex justify-center space-x-6 sm:space-x-10 mb-12 border-b border-gray-200 pb-4 max-w-lg mx-auto">
            {(['Insurance', 'Home Services', 'Medical'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-base sm:text-lg font-semibold transition-all pb-1 relative cursor-pointer ${
                  activeTab === tab ? 'text-gray-900 border-b-2 border-orange-500' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {verticalsData[activeTab].map((vertical, index) => (
              <Link 
                key={index} 
                href={vertical.href}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center hover:bg-orange-50/50 hover:border-orange-200 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="relative w-14 h-14 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ width: 'auto', height: 'auto' }}>
                  <Image src={vertical.icon} alt={vertical.title} width={56} height={56} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-orange-600 text-center">
                  {vertical.title}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 6. How We Generate Calls Slider Section */}
        <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-center text-3xl lg:text-4xl font-extrabold text-orange-500 mb-16">
              How We Generate Calls
            </h2>

            <div className="relative flex items-center justify-center">
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + generateCallsData.length) % generateCallsData.length)}
                className="absolute left-0 z-20 bg-white border border-gray-200 text-gray-800 p-3 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-all cursor-pointer -ml-4 lg:-ml-6"
              >
                ◀
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
                {[0, 1, 2].map((offset) => {
                  const itemIndex = (currentSlide + offset) % generateCallsData.length;
                  const data = generateCallsData[itemIndex];

                  return (
                    <div 
                      key={itemIndex} 
                      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between relative transform transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="absolute -top-6 left-8 bg-white p-3 rounded-2xl shadow-md border border-gray-100 w-12 h-12 flex items-center justify-center" style={{ width: 'auto', height: 'auto' }}>
                        <Image src={data.iconSrc} alt={data.title} width={24} height={24} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
                      </div>

                      <div className="mt-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{data.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {data.desc}
                        </p>
                      </div>

                      {data.link && (
                        <div className="mt-6 pt-4 border-t border-gray-50">
                          <span className="text-orange-500 font-bold text-xs flex items-center space-x-1 cursor-pointer hover:underline">
                            <span>Learn More</span>
                            <span>→</span>
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % generateCallsData.length)}
                className="absolute right-0 z-20 bg-white border border-gray-200 text-gray-800 p-3 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-all cursor-pointer -mr-4 lg:-mr-6"
              >
                ▶
              </button>
            </div>

            <div className="flex justify-center items-center space-x-2 mt-10">
              {generateCallsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-6 bg-orange-500' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Publishers & Advertisers Cards + Banner */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">For Publishers</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Monetize Your Traffic with High-Payout Call Campaigns.
                </p>
              </div>
              <div>
                <Link href="https://www.affcall.com/form/affiliate-register" className="inline-flex items-center space-x-2 border-2 border-orange-500 text-orange-500 font-bold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all text-sm">
                  <span>GET OFFERS</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">For Advertisers</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Get High-Intent Calls That Turn Into Paying Customers.
                </p>
              </div>
              <div>
                <Link href="https://www.affcall.com/form/advertiser-register" className="inline-flex items-center space-x-2 border-2 border-orange-500 text-orange-500 font-bold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all text-sm">
                  <span>GET QUALIFIED CALLS</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-orange-500 rounded-2xl p-8 lg:p-10 shadow-lg flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="mb-6 lg:mb-0 space-y-2 text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-extrabold">Start Receiving High-Intent Calls</h2>
              <p className="text-sm opacity-90 max-w-xl">
                Launch pay-per-call campaigns and only pay for qualified call that match your criteria.
              </p>
            </div>
            <div>
              <Link href="https://www.affcall.com/file/advertiser-register" className="bg-white text-orange-600 font-bold px-8 py-3.5 rounded-full shadow-md hover:bg-gray-100 transition-all inline-flex items-center space-x-2 text-sm">
                <span>LAUNCH CAMPAIGN</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. FAQ's Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-center text-3xl font-bold text-orange-500 mb-12">FAQ&apos;s</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side: FAQ list */}
            <div className="lg:col-span-7 space-y-4 w-full">
              {faqData.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className={`rounded-lg p-5 shadow-sm transition-colors duration-200 ${
                      isOpen ? 'bg-orange-500 text-white' : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <div 
                      className="flex justify-between items-center cursor-pointer" 
                      onClick={() => toggleFaq(index)}
                    >
                      <h4 className="font-bold text-sm">{faq.question}</h4>
                      <span>{isOpen ? '▲' : '▼'}</span>
                    </div>
                    {isOpen && (
                      <p className="text-xs mt-3 leading-relaxed opacity-90">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right side: Map Animation Video */}
            <div className="lg:col-span-5 flex justify-center items-center bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="relative w-full h-72 rounded-xl overflow-hidden map-animation">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl">
                  <source src="/map-animation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}