INSERT IGNORE INTO `PipelineStage` (`id`, `name`, `sortOrder`, `createdAt`, `updatedAt`) VALUES
  ('pipeline-stage-new', 'New', 0, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
  ('pipeline-stage-researching', 'Researching', 1, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
  ('pipeline-stage-qualified', 'Qualified', 2, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
  ('pipeline-stage-ready-to-contact', 'Ready to Contact', 3, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
  ('pipeline-stage-contacted', 'Contacted', 4, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
  ('pipeline-stage-responded', 'Responded', 5, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
  ('pipeline-stage-meeting-scheduled', 'Meeting Scheduled', 6, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
  ('pipeline-stage-proposal-sent', 'Proposal Sent', 7, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
  ('pipeline-stage-won', 'Won', 8, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
  ('pipeline-stage-lost', 'Lost', 9, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
