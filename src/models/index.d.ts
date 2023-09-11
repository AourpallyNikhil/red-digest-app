import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRedDigestModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RedDigestModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly emailAddress: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRedDigestModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RedDigestModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly emailAddress: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RedDigestModel = LazyLoading extends LazyLoadingDisabled ? RedDigestModel : LazyRedDigestModel

export declare const RedDigestModel: (new (init: ModelInit<RedDigestModel>) => RedDigestModel) & {
  copyOf(source: RedDigestModel, mutator: (draft: MutableModel<RedDigestModel>) => MutableModel<RedDigestModel> | void): RedDigestModel;
}