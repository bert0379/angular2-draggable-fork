import { ElementRef, Renderer2, OnInit, EventEmitter, OnChanges, SimpleChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { IPosition } from './models/position';
export declare class AngularDraggableDirective implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    private el;
    private renderer;
    private allowDrag;
    private moving;
    private orignal;
    private oldTrans;
    private tempTrans;
    private currTrans;
    private oldZIndex;
    private _zIndex;
    private needTransform;
    private draggingSub;
    /**
     * Bugfix: iFrames, and context unrelated elements block all events, and are unusable
     * https://github.com/xieziyu/angular2-draggable/issues/84
     */
    private _helperBlock;
    /**
     * Flag to indicate whether the element is dragged once after being initialised
     */
    private isDragged;
    started: EventEmitter<any>;
    stopped: EventEmitter<any>;
    edge: EventEmitter<any>;
    /** Make the handle HTMLElement draggable */
    handle: HTMLElement;
    /** Set the bounds HTMLElement */
    bounds: HTMLElement;
    /** List of allowed out of bounds edges **/
    outOfBounds: {
        top: boolean;
        right: boolean;
        bottom: boolean;
        left: boolean;
    };
    /** Round the position to nearest grid */
    gridSize: number;
    /** Set z-index when dragging */
    zIndexMoving: string;
    /** Set z-index when not dragging */
    zIndex: string;
    /** Whether to limit the element stay in the bounds */
    inBounds: boolean;
    /** Whether the element should use it's previous drag position on a new drag event. */
    trackPosition: boolean;
    /** Input css scale transform of element so translations are correct */
    scale: number;
    /** Whether to prevent default event */
    preventDefaultEvent: boolean;
    /** Set initial position by offsets */
    position: IPosition;
    /** Lock axis: 'x' or 'y' */
    lockAxis: string;
    /** Emit position offsets when moving */
    movingOffset: EventEmitter<IPosition>;
    /** Emit position offsets when put back */
    endOffset: EventEmitter<IPosition>;
    ngDraggable: any;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    private getDragEl;
    resetPosition(): void;
    private moveTo;
    private transform;
    private pickUp;
    private subscribeEvents;
    private unsubscribeEvents;
    boundsCheck(): {
        'top': boolean;
        'right': boolean;
        'bottom': boolean;
        'left': boolean;
    };
    /** Get current offset */
    getCurrentOffset(): IPosition;
    private putBack;
    checkHandleTarget(target: EventTarget, element: Element): boolean;
    onMouseDown(event: MouseEvent | TouchEvent): void;
    onMouseMove(event: MouseEvent | TouchEvent): void;
}
