/*******************************************************
 * VJ PROCESS EXCELLENCE AI
 * MASTER GAP REGISTER MODULE
 *******************************************************/

const GAP_RISK_LEVELS = [
  "Critical",
  "High",
  "Medium",
  "Low"
];

const GAP_STATUS = [
  "Open",
  "Closed",
  "Overdue",
  "Pending"
];


/**
 * Check Risk Level
 */
function isValidRiskLevel(riskLevel) {

  return GAP_RISK_LEVELS.includes(riskLevel);

}


/**
 * Check Status
 */
function isValidGapStatus(status) {

  return GAP_STATUS.includes(status);

}


/**
 * Create Gap Record
 */
function createGapRecord(
  gapId,
  date,
  department,
  process,
  finding,
  riskLevel,
  owner,
  dueDate,
  status
) {

  if (!isValidRiskLevel(riskLevel)) {

    throw new Error(
      "Invalid Risk Level: " + riskLevel
    );

  }

  if (!isValidGapStatus(status)) {

    throw new Error(
      "Invalid Gap Status: " + status
    );

  }

  return {

    gapId: gapId,

    date: date,

    department: department,

    process: process,

    finding: finding,

    riskLevel: riskLevel,

    owner: owner,

    dueDate: dueDate,

    status: status

  };

}


/**
 * Calculate Closure Percentage
 */
function calculateClosurePercentage(
  totalIssues,
  closedIssues
) {

  if (!totalIssues || totalIssues <= 0) {

    return 0;

  }

  return Math.round(
    (closedIssues / totalIssues) * 100
  );

}


/**
 * Calculate Overdue Percentage
 */
function calculateOverduePercentage(
  totalIssues,
  overdueIssues
) {

  if (!totalIssues || totalIssues <= 0) {

    return 0;

  }

  return Math.round(
    (overdueIssues / totalIssues) * 100
  );

}


/**
 * Generate Gap Summary
 */
function getGapSummary(
  totalIssues,
  criticalIssues,
  highIssues,
  mediumIssues,
  lowIssues,
  openIssues,
  closedIssues,
  overdueIssues
) {

  return {

    totalIssues: totalIssues,

    criticalIssues: criticalIssues,

    highIssues: highIssues,

    mediumIssues: mediumIssues,

    lowIssues: lowIssues,

    openIssues: openIssues,

    closedIssues: closedIssues,

    overdueIssues: overdueIssues,

    closurePercentage:
      calculateClosurePercentage(
        totalIssues,
        closedIssues
      ),

    overduePercentage:
      calculateOverduePercentage(
        totalIssues,
        overdueIssues
      )

  };

}
