// ===== ANALYSIS FUNCTION =====
// Computes financial health scores across all 6 pillars
function analyze(a) {
  const occ = OCCUPATIONS.find((o) => o.id === a.occupation) || OCCUPATIONS[2];
  let efMonthsNeeded = occ.months;
  if (a.incomeType !== "Fixed Income")
    efMonthsNeeded = Math.min(12, efMonthsNeeded + 3);
  const efHave = EF_STATUS.find((s) => s.id === a.efStatus)?.months ?? 0;
  const efScore = Math.min(
    95,
    Math.round((efHave / efMonthsNeeded) * 100)
  );

  const invBase =
    a.investStatus === "regular" ? 75 : a.investStatus === "some" ? 50 : 25;
  const invScore = Math.min(90, invBase + (a.investTypes.length >= 2 ? 10 : 0));

  const insCount = a.insurance.filter(
    (i) => i !== "ไม่มี" && i !== "Others"
  ).length;
  let insScore =
    a.insurance.includes("ไม่มี") || insCount === 0
      ? 20
      : 30 + insCount * 20;
  if (
    a.hasDebt &&
    a.debtTypes.includes("Home Loan") &&
    !a.insurance.includes("Life Insurance")
  )
    insScore = Math.min(insScore, 55);
  insScore = Math.min(90, insScore);

  const dti =
    a.hasDebt && a.income > 0 ? (a.debtPayment / a.income) * 100 : 0;
  const spendScore = !a.hasDebt
    ? 78
    : dti < 20
    ? 68
    : dti < 40
    ? 48
    : 28;

  const annual = a.income * 12;
  const taxable = annual > 310000;
  const taxScore = !taxable ? 75 : 55;

  const goalsScore =
    a.goals.length === 0 ? 30 : Math.min(85, 45 + a.goals.length * 10);

  const expense = a.expense || Math.round(a.income * 0.65);
  const overall = Math.round(
    (efScore + invScore + insScore + spendScore + taxScore + goalsScore) / 6
  );
  return {
    occ,
    efMonthsNeeded,
    efHave,
    efScore,
    invScore,
    insScore,
    spendScore,
    taxScore,
    goalsScore,
    dti,
    taxable,
    annual,
    expense,
    overall,
  };
}
