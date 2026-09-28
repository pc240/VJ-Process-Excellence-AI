/*******************************************************
 * VJ PROCESS EXCELLENCE AI
 * DASHBOARD MODULE
 *******************************************************/

function getDashboardSummary() {

  return {

    company: APP_CONFIG.COMPANY_NAME,

    project: APP_CONFIG.PROJECT_NAME,

    version: APP_CONFIG.VERSION,

    totalAudits: 0,

    completedAudits: 0,

    pendingAudits: 0,

    totalFindings: 0,

    criticalFindings: 0,

    highFindings: 0,

    mediumFindings: 0,

    lowFindings: 0,

    openIssues: 0,

    closedIssues: 0,

    overdueIssues: 0,

    closurePercentage: 0

  };
}
