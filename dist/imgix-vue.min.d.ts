import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { default as default_2 } from '@imgix/js-core';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PublicProps } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { VNode } from 'vue';

declare const app: App<Element>;

export declare const buildImgixClient: (options: IImgixClientOptions) => VueImgixClient;

export declare const buildSrcSet: IBuildSrcSet;

export declare const buildUrl: IBuildUrl;

export declare const buildUrlObject: IBuildUrlObject;

export declare const ensureVueImgixClientSingleton: () => IVueImgixClient;

declare type IBuildSrcSet = (url: string, ixParams?: IImgixParams, options?: IBuildSrcSetOptions) => string;

declare type IBuildSrcSetOptions = Parameters<default_2['buildSrcSet']>[2];

declare type IBuildUrl = (url: string, ixParams?: IImgixParams) => string;

declare type IBuildUrlObject = (url: string, ixParams?: IImgixParams, options?: IBuildUrlObjectOptions) => IBuildUrlObjectResult;

declare type IBuildUrlObjectOptions = IBuildSrcSetOptions & IBuildUrlOptions;

declare interface IBuildUrlObjectResult {
    src: string;
    srcset: string;
}

declare type IBuildUrlOptions = Record<string, unknown>;

declare interface IImgixClientOptions {
    domain: string;
    includeLibraryParam?: boolean;
    defaultIxParams?: IImgixParams;
}

declare type IImgixParams = Record<string, unknown>;

export declare const initVueImgix: (options: IImgixClientOptions) => void;

export declare function install(_app: typeof app, options: IVueUseImgixOptions): void;

export declare namespace install {
    var installed: boolean;
}

export declare type IVueImgixClient = {
    buildUrlObject: IBuildUrlObject;
    buildUrl: IBuildUrl;
    _buildUrl: IBuildUrl;
    buildSrcSet: IBuildSrcSet;
    _buildSrcSet: IBuildSrcSet;
};

declare type IVueUseImgixOptions = IImgixClientOptions;

export declare const IxImg: DefineComponent<    {
src: {
type: StringConstructor;
required: boolean;
};
fixed: BooleanConstructor;
imgixParams: ObjectConstructor;
width: (StringConstructor | NumberConstructor)[];
height: (StringConstructor | NumberConstructor)[];
attributeConfig: ObjectConstructor;
disableVariableQuality: BooleanConstructor;
sizes: StringConstructor[];
}, () => VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
src: {
type: StringConstructor;
required: boolean;
};
fixed: BooleanConstructor;
imgixParams: ObjectConstructor;
width: (StringConstructor | NumberConstructor)[];
height: (StringConstructor | NumberConstructor)[];
attributeConfig: ObjectConstructor;
disableVariableQuality: BooleanConstructor;
sizes: StringConstructor[];
}>>, {
fixed: boolean;
disableVariableQuality: boolean;
}, {}>;

export declare const IxImgProps: {
    src: {
        type: StringConstructor;
        required: boolean;
    };
    fixed: BooleanConstructor;
    imgixParams: ObjectConstructor;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    attributeConfig: ObjectConstructor;
    disableVariableQuality: BooleanConstructor;
    sizes: StringConstructor[];
};

export declare const IxSourceProps: {
    src: {
        type: StringConstructor;
        required: boolean;
    };
    imgixParams: ObjectConstructor;
    attributeConfig: ObjectConstructor;
};

declare const plugin: {
    install: typeof install;
};
export default plugin;

declare class VueImgixClient implements IVueImgixClient {
    client: default_2;
    private readonly options;
    constructor(options: IImgixClientOptions);
    buildIxParams: (ixParams?: IImgixParams) => {
        [x: string]: unknown;
    };
    buildUrlObject: (url: string, ixParams?: IImgixParams, options?: IBuildUrlObjectOptions) => IBuildUrlObjectResult;
    buildUrl: (url: string, ixParams?: IImgixParams) => string;
    _buildUrl: (url: string, ixParams?: IImgixParams) => string;
    buildSrcSet: (url: string, ixParams?: IImgixParams, options?: IBuildSrcSetOptions) => string;
    _buildSrcSet: (url: string, ixParams?: IImgixParams, options?: IBuildSrcSetOptions) => string;
}

export { }


export declare namespace install {
    var installed: boolean;
}

