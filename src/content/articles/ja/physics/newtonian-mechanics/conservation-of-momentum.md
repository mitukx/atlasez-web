---
articleId: ja-physics-conservation-of-momentum
locale: ja
title: 運動量保存則
slug: conservation-of-momentum
subject: physics
category: newtonian-mechanics
concepts:
  - id: physics.newtonian-mechanics.conservation-of-momentum
authors:
  - atlas-physics-team
reviewers: []
status: published
createdAt: 2024-01-01
updatedAt: 2026-07-22
summary: 運動量変化と力積の関係から保存則を導くことを考える。 …
difficulty: intermediate
estimatedMinutes: 10
tags:
  - 運動量保存則
aliases: []
exerciseIds:
  pre: []
  post: []
references: []
---

運動量変化と力積の関係から保存則を導くことを考える。

### 質点の運動量保存則

まず、$\dv{\vb*p_i}{t}=\vb*F_i$より、$\vb*F_i=\vb*0$のとき、$\dv{\vb*p_i}{t}=\vb*0$すなわち$\vb*p_i(t_2)-\vb*p_i(t_1)=\vb*0$となり$\vb*p_i$は保存する。これを運動量保存則という。

$\vb*p_i(t_2)-\vb*p_i(t_1)=\int_{t_1}^{t_2}\vb*F_i\dd t$が保存則となることは、ある量$\vb*A_i$が存在して右辺が$\int_{t_1}^{t_2}\vb*F_i\dd t=\vb*A(t_2)-\vb*A(t_1)$と書けること、すなわち$\vb*F_i=\dv{\vb*A_i}{t}$なる$\vb*A_i$が存在するということと同値である。しかし、一般に$\vb*F_i$は各質点の運動や観測者の座標系を通して時間に陰に依存し、また時間に陽に依存しないので、$\int_{t_1}^{t_2}\vb*F\dd t$は粒子の運動に依存し、境界の時間のみで書くことができない。すなわちそのような$\vb*A_i$は一般に存在しない。一方で、$\vb*F_i$が各質点の位置や速度などに依存しないと見なせる場合、そうした近似を採用すると時間に陰にも依存しなくなり$\vb*F_i$は定数となって$\vb*Q_i=-\int_{t_0}^{t}\vb*F_i\dd t$が各質点の運動によらず定義でき、$\vb*p_i+\vb*Q_i$が保存する。$\vb*F_i$が時間に陽に依存する拘束力はここでは考えない。

### 質点系の運動量保存則

質点の場合と同様に、$\dv{\vb*P}{t}=\vb*F_{\mathrm{all}}^\mathrm{ex}$より、$\vb*F_{\mathrm{all}}^\mathrm{ex}=\vb*0$のとき、$\dv{\vb*P}{t}=\vb*0$すなわち$\vb*P(t_2)-\vb*P(t_1)=\vb*0$となり$\vb*P$は保存する。これを質点系の運動量保存則という。

$\vb*F_{\mathrm{all}}^\mathrm{ex}$が各質点の位置や速度などに依存しないと見なせる場合、そうした近似を採用すると$\vb*Q_{\mathrm{all}}=-\int_{t_0}^{t}\vb*F_{\mathrm{all}}^\mathrm{ex}\dd t$が質点の運動によらず定義でき、$\vb*P+\vb*Q_{\mathrm{all}}$が保存する。
