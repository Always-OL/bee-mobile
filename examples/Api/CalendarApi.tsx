import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../../src/components/common/BaseProps';
import {Content} from '../../src/components/Page';
import PageView from '../components/PageView';

interface CalendarApiProps extends BaseProps {
}

export default class CalendarApi extends React.PureComponent<CalendarApiProps, {}> {
    static defaultProps = {
        prefixCls: 'bm-CalendarApi',
    };

    getCode() {
        return `import * as React from 'react';
import * as classNames from 'classnames';
import {BaseProps} from '../components/common/BaseProps';
import Calendar from '../components/Calendar';
import {Content} from '../components/Page';

interface CalendarCaseProps extends BaseProps {
}

export default class CalendarCase extends React.PureComponent< CalendarCaseProps, {}> {
    state = {
        visible: false
    };

    handleChange = (value: any) => {
        console.log(value);
    };

    render() {
        const {className, ...other} = this.props;
        const styleClass = classNames(
            'CalendarCase',
            className
        );
        return (
            <Content className={styleClass} {...other}>
                <div className="CasePanel">
                    <Calendar onChange={this.handleChange}/>
                </div>
            </Content>
        );
    }
}`;
    }

    getFields() {
        return [{
            field: 'attr',
            header: '属性',
        }, {
            field: 'desc',
            header: '说明',
        }, {
            field: 'type',
            header: '类型',
        }, {
            field: 'default',
            header: '默认值',
        }];
    }

    render() {
        const {className, prefixCls} = this.props;
        const styleClass = classNames(
            prefixCls, className,
            'ApiContent',
        );
        const data = [{
            name: 'Calendar',
            fields: this.getFields(),
            attributes: [{
                attr: 'defaultValue',
                desc: '默认日期',
                type: 'String',
                default: '-',
            }, {
                attr: 'format',
                desc: '日期格式',
                type: 'String',
                default: 'yyyy-MM-dd',
            }, {
                attr: 'minDate',
                desc: '最小日期',
                type: 'String',
                default: '-',
            }, {
                attr: 'maxDate',
                desc: '最大日期',
                type: 'String',
                default: '-',
            }, {
                attr: 'visible',
                desc: '是否显示',
                type: 'Boolean',
                default: 'false',
            }, {
                attr: 'onChange',
                desc: '选择日期时触发的回调',
                type: '(value: string): void',
                default: '-',
            }],
        }];
        return (
            <Content className={styleClass}>
                <PageView
                    title="Calendar 日期选择器"
                    code={this.getCode()}
                    data={data}
                    app="适用平台：WEB"
                    frameUrl="#/components/calendar"
                    description="日期选择器提供了常用的日期选择功能。"
                />
            </Content>
        );
    }
}
