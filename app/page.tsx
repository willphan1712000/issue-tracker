import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";

export default async function Home() {
  const open = await prisma.issue.count({where: { status: 'OPEN'}});
  const inProgress = await prisma.issue.count({where: { status: 'IN_PROGRESS'}});
  const closed = await prisma.issue.count({where: { status: 'CLOSED'}});
  const count = {
    open,
    inProgress,
    closed
  }

  return (
    <Grid columns={{initial: "1", md: "2"}} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary count={count}/>
        <IssueChart count={count}/>
      </Flex>
      <LatestIssues />
    </Grid>
  )
}

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "Overview of issues"
}