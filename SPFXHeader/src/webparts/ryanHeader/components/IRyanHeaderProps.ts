import { SPHttpClient } from "@microsoft/sp-http";

export default interface IRyanHeaderProps {
  description: string;
  spHttpClient: SPHttpClient;
  currentSiteUrl: string;
  siteCollectionUrl: string;
}
