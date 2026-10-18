import{M as e,a as t,b as n,f as r,g as i,h as a,i as o,l as s,m as c,n as l,r as u,t as d,v as f,w as p}from"./shell-B3lHNc5Y.js";function m(m,h){let{phone:g}=h,{scene:_,camera:v,pointer:y,onFrame:b,wide:x}=d(m,{phone:g,fog:[18,40]}),S=new c;_.add(S);let C=5.5,w=new i(new n(10,C,g?80:160,g?44:88),new p({uniforms:{uTime:{value:0},uHeat:{value:0}},transparent:!0,vertexShader:`uniform float uTime; varying vec2 vUv; varying float vH;
      void main(){
        vUv = uv; vec3 p = position;
        float h = sin(p.x * 1.3 + uTime * 1.1) * .05 + sin(p.y * 1.9 - uTime * .9) * .04 + sin((p.x + p.y) * 3. + uTime * 1.7) * .02;
        p.z += h; vH = h;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
      }`,fragmentShader:`uniform float uTime; uniform float uHeat; varying vec2 vUv; varying float vH;
      float caustic(vec2 p){ p *= 7.; float a = sin(p.x + sin(p.y * 1.3 + uTime * .7)); float b = sin(p.y * 1.1 + sin(p.x * .9 - uTime * .6)); return pow(1. - abs(a * b), 6.); }
      void main(){
        // the warm front spreads from the return pipe (right side) across the pool
        float front = smoothstep(uHeat * 1.25 - .25, uHeat * 1.25, 1. - vUv.x);
        vec3 cold = mix(vec3(.03, .2, .26), vec3(.08, .42, .48), vUv.y);
        vec3 warm = mix(vec3(.45, .12, .05), vec3(1., .5, .2), vUv.y * .6 + .2);
        vec3 col = mix(warm, cold, front);
        col += caustic(vUv * vec2(1.8, 1.)) * mix(vec3(.35, .65, .65), vec3(1., .6, .3), 1. - front) * .35;
        col += vH * 1.8;
        gl_FragColor = vec4(col, .96);
      }`}));w.rotation.x=-Math.PI/2,S.add(w);let T=new f({color:14272440,roughness:.85}),E=new f({color:1714736,roughness:.9}),D=(e,n,r,a)=>{let o=new i(new t(e,.25,n),T);o.position.set(r,.05,a),S.add(o)};D(11.6,.8,0,3.15),D(11.6,.8,0,-5.5/2-.4),D(.8,C,5.4,0),D(.8,C,-5.4,0);let O=new i(new t(10,1.6,C),E);O.position.y=-.98,S.add(O);let k=new i(new n(40,30),new f({color:1837837,roughness:1}));k.rotation.x=-Math.PI/2,k.position.y=-.08,S.add(k);let A=new s([new e(12,.25,-1.4),new e(8.5,.25,-1.4),new e(7,.25,-.4),new e(5.8,.25,0),new e(4.8,.12,0)]),j=l(A,{radius:.14,segments:240});S.add(j.group),_.add(new a(16773350,1312006,1.1));let M=new r(16769736,1.2);M.position.set(-6,10,4),_.add(M);let N=o(g?120:260,{color:16765104,size:.07,height:2.6,speed:.12});S.add(N.points);let P=u(m,h),F=new e;b(e=>{let t=P.value,n=P.scroll;w.material.uniforms.uTime.value=e,w.material.uniforms.uHeat.value=Math.max(0,t*1.15-.15),j.uniforms.uProgress.value=Math.min(1,t*3),j.uniforms.uTime.value=e;let r=x()?1:1.9;S.position.x=x()?-5.2:0,F.set(y.x*1.4,(14-n*5)*r,(9+n*3)*r),v.position.lerp(F,.06),v.lookAt(S.position.x*.6,-.5,r>1?4.5-n*2:0),S.rotation.y=.22+y.x*.06+Math.sin(e*.12)*.02;let i=Math.min(1,t*1.2);N.update(e,(e,t,n)=>t.set(5-e*10*i,.05,(n*37%100/100-.5)*C*.9)),N.material.opacity=.5*Math.max(0,t-.3)*1.6})}export{m as default};