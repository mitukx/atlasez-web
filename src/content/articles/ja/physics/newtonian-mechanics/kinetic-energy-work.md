---
articleId: ja-physics-kinetic-energy-work
locale: ja
title: 運動エネルギーと仕事
slug: kinetic-energy-work
subject: physics
category: newtonian-mechanics
concepts:
  - id: physics.newtonian-mechanics.kinetic-energy-work
authors:
  - atlas-physics-team
reviewers: []
status: published
createdAt: 2024-01-01
updatedAt: 2026-07-22
summary: 質点 の運動方程式を運動に沿って線積分することを考える。位置 から までの運動について、 の両辺を経路に沿って線積分すると、 より、 を得る。 …
difficulty: intermediate
estimatedMinutes: 5
tags:
  - 運動エネルギーと仕事
aliases: []
exerciseIds:
  pre: []
  post: []
references: []
---

質点$i$の運動方程式を運動に沿って線積分することを考える。位置$\vb*r_i(t_1)$から$\vb*r_i(t_2)$までの運動について、$m_i\dv[2]{\vb*r_i}{t}=\vb*F_i(\vb*r_i)$の両辺を経路に沿って線積分すると、

$$
\int_{C(\vb*r_i(t_1)\to\vb*r_i(t_2))}m_i{\dv[2]{\vb*r_i}{t}}\vdot\dd{\vb*r_i}=\int_{C(\vb*r_i(t_1)\to\vb*r_i(t_2))}\vb*F_i\vdot\dd{\vb*r_i}
$$

$$
\int_{C(\vb*r_i(t_1)\to\vb*r_i(t_2))}m_i{\dv[2]{\vb*r_i}{t}}\vdot\dd{\vb*r_i}=m_i\int_{t_1}^{t_2}\dv[2]{\vb*r_i}{t}\vdot\dv{\vb*r_i}{t}\dd t=\frac{1}{2}m_i\int_{t_1}^{t_2}\dv{}{t}(\dv{\vb*r_i}{t}\vdot\dv{\vb*r_i}{t})\dd t=\frac{1}{2}m_i\int_{t_1}^{t_2}\dv{({v_i}^2)}{t}\dd t
$$

より、

$$
\frac{1}{2}m_i{v_i}^2(t_2)-\frac{1}{2}m_i{v_i}^2(t_1)=\int_{C(\vb*r_i(t_1)\to\vb*r_i(t_2))}\vb*F_i\vdot\dd{\vb*r_i}
$$

を得る。 ここで、左辺は運動の境界時刻$t_1,\,t_2$の量$K_i:=\frac{1}{2}m{v_i}^2$の差であり、これを質点$i$の運動エネルギーと呼ぶ。右辺は力の線積分であり、この量$W_i^{C(\vb*r_i(t_1)\to\vb*r_i(t_2))}=\int_{C(\vb*r_i(t_1)\to\vb*r_i(t_2))}\vb*F_i(\vb*r_i)\vdot\dd{\vb*r_i}$を質点$i$になされる仕事と呼ぶ。すなわち、

$$
K(t_2)-K(t_1)=W_i^{C(\vb*r_i(t_1)\to\vb*r_i(t_2))}。
$$

運動エネルギーの時間微分は$\int_{C(\vb*r_i(t_1)\to\vb*r_i(t_2))}\vb*F_i\vdot\dd{\vb*r_i}=\int_{t_1}^{t_2}\vb*F\vdot\vb*v_i\dd{t}$より、$\dv{K_i}{t}=\vb*F_i\vdot\vb*v_i$で与えられる。$P_i=\vb*F_i\vdot\vb*v_i$を仕事率という。

上式は$K_i=\frac{1}{2}m_i{v_i}^2$を直接時間微分することでも求められる。$\dv{v}{t}=\dv{}{t}(\sqrt{{v_x}^2+{v_y}^2+{v_z}^2})=\frac{2v_x\dv{v_x}{t}+2v_y\dv{v_y}{t}+2v_z\dv{v_z}{t}}{2\sqrt{{v_x}^2+{v_y}^2+{v_z}^2}}=\frac{\vb*v\vdot\vb*a}{v}$より、$\dv{K_i}{t}=m_iv_i\dv{v_i}{t}=m_i\vb*a_i\vdot\vb*v_i=\vb*F_i\vdot\vb*v_i$。
