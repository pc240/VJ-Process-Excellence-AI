/*******************************************************
 * VJ PROCESS EXCELLENCE AI
 * AUDIT MODULE
 *******************************************************/

const AUDIT_TYPES = [
  "SOP Audit",
  "Selection SOP Audit",
  "Housekeeping Audit"
];


/**
 * Check karta hai ki Audit Type valid hai ya nahi.
 */
function isValidAuditType(auditType) {

  return AUDIT_TYPES.includes(auditType);

}


/**
 * Audit record create karta hai.
 */
function createAuditRecord(
  personName,
  department,
  auditType,
  auditDate,
  status
) {

  if (!isValidAuditType(auditType)) {

    throw new Error(
      "Invalid Audit Type: " + auditType
    );

  }

  return {

    personName: personName,

    department: department,

    auditType: auditType,

    auditDate: auditDate,

    status: status

  };

}


/**
 * Audit completion percentage calculate karta hai.
 */
function calculateAuditCompletion(
  totalAudits,
  completedAudits
) {

  if (!totalAudits || totalAudits <= 0) {

    return 0;

  }

  return Math.round(
    (completedAudits / totalAudits) * 100
  );

}


/**
 * Audit summary generate karta hai.
 */
function getAuditSummary(
  totalAudits,
  completedAudits,
  pendingAudits
) {

  const completionPercentage =
    calculateAuditCompletion(
      totalAudits,
      completedAudits
    );

  return {

    totalAudits: totalAudits,

    completedAudits: completedAudits,

    pendingAudits: pendingAudits,

    completionPercentage:
      completionPercentage

  };

}
