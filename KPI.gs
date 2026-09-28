/*******************************************************
 * VJ PROCESS EXCELLENCE AI
 * KPI MODULE
 *******************************************************/

function calculateCompletionPercentage(completed, total) {

  if (!total || total <= 0) {
    return 0;
  }

  return Math.round((completed / total) * 100);
}


function calculateAuditStatus(required, completed) {

  if (!required || required <= 0) {
    return "No Requirement";
  }

  if (completed >= required) {
    return "Completed";
  }

  return "Pending";
}


function calculatePersonAuditKPI(required, completed) {

  const percentage = calculateCompletionPercentage(
    completed,
    required
  );

  return {
    required: required,
    completed: completed,
    pending: Math.max(required - completed, 0),
    completionPercentage: percentage,
    status: calculateAuditStatus(required, completed)
  };
}


function getKPIStatus(completionPercentage) {

  if (completionPercentage >= 100) {
    return "Completed";
  }

  if (completionPercentage >= 75) {
    return "On Track";
  }

  if (completionPercentage >= 50) {
    return "Needs Attention";
  }

  return "Critical";
}
