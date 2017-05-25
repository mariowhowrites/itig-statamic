<?php

namespace Statamic\Addons\StatamicCampaign;

use Statamic\Contracts\Forms\Submission;
use Statamic\Data\Globals\GlobalFactory;
use Statamic\Extend\Listener;

class StatamicCampaignListener extends Listener
{
    /**
     * The events to be listened for, and the methods to call.
     *
     * @var array
     */
    public $events = ['Form.submission.created' =>  'sendToActiveCampaign'];

    public function sendToActiveCampaign(Submission $submission) {
        $ac = new \ActiveCampaign( 'https://itig.api-us1.com', 'a16cd0653ce4eb18e6614a9b8bf61b4b4513aa76f172ff49311896cfb7c32c7ab749a280');

        if ('ac-hero' === $submission->formset()->name() ) {
            $body = collect( array_keys( $submission->formset()->fields() ) )
                    ->reduce( function($array, $field) use ($submission) {
                        $array[$field]  = $submission->get($field);
                        return $array;
                    }, []);

            $body['list_id'] = 'p[3]';

            $body;

            $response = $ac->api('contact/sync', $body);
        }



    }
}
